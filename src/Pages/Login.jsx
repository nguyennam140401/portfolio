import React, { useState } from 'react'
import { Style } from './LoginStyle'
import { Link } from 'react-router-dom'
import Progess from '../components/Progess'
import { login } from '../api'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [formDataState, setFormDataState] = useState({
        username: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const changeInput = (e) => {
        const field = e.target.name
        const value = e.target.value
        setFormDataState({ ...formDataState, [field]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const res = await login(formDataState)
        if (res.success) {
            alert('Đăng nhập thành công')
            navigate('/')
        }
        setIsLoading(false)
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
