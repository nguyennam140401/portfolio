import { createContext, useEffect, useState } from 'react'
import * as api from '../api'
import setAuthToken from '../utils/setAuthToken'

export const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        token: null,
        // username: '',
    })
    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            setAuthState({
                isAuthenticated: true,
                token: localStorage.getItem('authToken'),
            })
            setAuthToken(localStorage.getItem('authToken'))
        }
    }, [])
    const login = async (data) => {
        try {
            const res = await api.login(data)
            if (res.success) {
                console.log(res)
                setAuthToken(res.accessToken)
                localStorage.setItem('authToken', res.acessToken)
                setAuthState({
                    isAuthenticated: true,
                    token: res.acessToken,
                })
            }
            return res
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }
        }
    }
    const logout = () => {
        localStorage.removeItem('authToken')
        setAuthToken(null)
        setAuthState({
            isAuthenticated: false,
            token: null,
        })
    }
    const data = { login, logout, authState }
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
export default AuthContextProvider
