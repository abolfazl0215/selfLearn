import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.headers.post["Content-Type"]="application/json";
const token=localStorage.getItem("token");
if(token) axios.defaults.headers.common["Authorization"]=`Bearer ${token}`
axios.interceptors.response.use(null,error=>{
    const expectedError= 
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
    if(!expectedError){
        toast.success('مشکلی از سمت سرور پیش امده است',{position:'top-right',autoClose:true})
    } 
    Promise.reject(error)
})

export default{
    post:axios.post,
    get:axios.get,
    put:axios.put,
    delete:axios.delete
}