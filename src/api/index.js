const uri = process.env.URL_API || 'http://localhost:5000'
const axios = require('axios')
export const login = async (data) => {
    const res = await axios.post(`${uri}/auth/login`, data)
    return res.data
}
export const register = async (data) => {
    const res = await axios.post(`${uri}/auth/register`, data)
    return res.data
}
export const updateProfile = async (name) => {
    const res = await axios.put(`${uri}/user`, name)
    return res.data
}
export const getProfile = async (name) => {
    const res = await axios.get(`${uri}/user`, name)
    return res.data
}
