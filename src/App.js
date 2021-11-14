import './App.css'

// import { useEffect } from 'react'

import ProfilePage from './Pages/ProfilePage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SetProfilePage from './Pages/SetProfilePage'
import UserContextProvider from './context/UserContext'
import AuthContextProvider from './context/AuthContext'
import ProtectRouter from './router/ProtectRouter'
function App() {
    return (
        // <ProfilePage></ProfilePage>
        <AuthContextProvider>
            <UserContextProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<ProfilePage />}></Route>
                        <Route path="/:id" element={<ProfilePage />}></Route>
                        <Route
                            path="/setProfile"
                            element={<SetProfilePage />}
                        ></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                    </Routes>
                </Router>
            </UserContextProvider>
        </AuthContextProvider>
    )
}

export default App
