import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:1000/api/v1/'
})
export const login = (email,password) => {
    return api.post('login', {email,password})
    
}

export const registro = (name,email,password) => {
    return api.post('registro', {name,email,password})
}
