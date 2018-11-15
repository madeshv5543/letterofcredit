
import axios from 'axios';
const API_URL = 'http://localhost:3000/api'
const EndPoints ={
    Register: '/signUp',
    Login: '/login'
}



const RegisterUser = function(data) {
    return axios.post(`${API_URL}${EndPoints.Register}`, data).then(res =>  res.data)
}

const Login = function(data) {
    return axios.post(`${API_URL}${EndPoints.Login}`, data).then(res => res.data)
}

export  default {
    RegisterUser,
    Login
}