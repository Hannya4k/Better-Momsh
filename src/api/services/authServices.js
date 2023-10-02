import { observable, action } from 'mobx';
import axios from 'axios';

const authServices = axios.create({
    baseURL:"https://127.0.0.1:44361/api",
    responseType:'json',
    withCredentials:true,
})

export default authServices;
