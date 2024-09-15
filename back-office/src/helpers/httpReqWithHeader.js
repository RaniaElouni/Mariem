import axios from "axios"
const apiUrl ='http://localhost:4000/'
export const getWithHeader = async(url)=>{
    const token =JSON.parse(localStorage.getItem('token'))
    const resp=await axios.get(apiUrl+URL,{headers:{Authorization:'bearer'+token}})
    return resp;
}
export const postWithHeader = async(url,body)=>{
    const token =JSON.parse(localStorage.getItem('token'))
    const resp=await axios.post(apiUrl+URL,body,{headers:{Authorization:'bearer'+token}})
    return resp;
}