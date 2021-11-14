import React, { useContext } from 'react'
import { Style } from './FooterStyle'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
const Footer = () => {
    const {
        logout,
        authState: { isAuthenticated },
    } = useContext(AuthContext)
    console.log(isAuthenticated)
    return (
        <Style>
            <div className="footer">
                Made by VanNam
                {isAuthenticated ? (
                    <div onClick={logout} className="footer_option">
                        Logout
                    </div>
                ) : (
                    <a href="/login" className="footer_option">
                        Tạo tài khoản cho riêng mình ?
                    </a>
                )}
            </div>
        </Style>
    )
}

export default Footer
