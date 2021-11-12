// import React from 'react'
import { Style } from './LoginStyle'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { register } from '../api'
import Progess from '../components/Progess'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [formDataState, setFormDataState] = useState({
        username: '',
        password: '',
        confirmPassword: '',
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
        const res = await register(formDataState)
        if (res.success) {
            alert('Bạn đã đăng kí thành công')
            navigate('/login')
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
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                onChange={changeInput}
                            />
                        </div>

                        <div className="form__control">
                            <button className="beauty">Register</button>
                        </div>
                        <p>
                            Bạn đã có tài khoản?{' '}
                            <Link to="/login">Đăng nhập ngay</Link>
                        </p>
                    </form>
                </div>
            </div>
        </Style>
    )
}

export default Login
