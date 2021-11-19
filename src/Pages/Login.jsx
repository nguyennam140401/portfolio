import React, { useContext, useState } from 'react'
import { Style } from './LoginStyle'
import { Link } from 'react-router-dom'
import Progess from '../components/Progess'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { UserContext } from '../context/UserContext'
import * as api from '../api'
const Login = () => {
    const [formDataState, setFormDataStatee] = useState({
        username: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const {
        login,
        authState: { isAuthenticated },
    } = useContext(AuthContext)
    const { changeProfile } = useContext(UserContext)
    useContext(UserContext)
    const navigate = useNavigate()
    const changeInput = (e) => {
        const field = e.target.name
        const value = e.target.value
        setFormDataStatee({ ...formDataState, [field]: value })
    }
    if (isAuthenticated) {
        navigate('/')
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const res = await login(formDataState)
        setIsLoading(false)
        if (res.success) {
            const userData = await api.getProfile(res.user.username)

            changeProfile(userData.data)
            alert('Đăng nhập thành công')
            if (res.user.isNew) {
                navigate('/setProfile')
            } else {
                navigate(`/${userData.data.username}`)
            }
        } else {
            alert('Đăng nhập thất bại')
        }

        return function cleanup() {}
    }
    return (
        <Style>
            <div className="login">
                <div className="title">Hello</div>
                {isLoading && <Progess />}
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="form__control">
                            <label htmlFor="username">Your Name</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="User Name"
                                onChange={changeInput}
                            />
                        </div>
                        <div className="form__control">
                            <label htmlFor="password">Your Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                // placeholder=""
                                onChange={changeInput}
                            />
                        </div>

                        <div className="form__control">
                            <button className="beauty">Login</button>
                        </div>
                        <p>
                            Bạn đã chưa tài khoản?{' '}
                            <Link to="/register">Đăng kí ngay</Link>
                        </p>
                    </form>
                </div>
            </div>
        </Style>
    )
}

export default Login
