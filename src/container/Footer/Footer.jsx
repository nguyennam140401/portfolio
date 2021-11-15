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
                    <Link to="/login" className="footer_option">
                        Tạo tài khoản cho riêng mình ?
                    </Link>
                )}
            </div>
        </Style>
    )
}

export default Footer
