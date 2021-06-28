import axios from 'axios'


export const login = (email,password) => {
    return axios.post('http://localhost:4000/api/v1/login', {email,password})
    
}