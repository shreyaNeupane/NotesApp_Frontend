import axios from "axios"
import { API } from "../http"

const registerUser = (data) =>{
   return API.post("user/register",data)
    
}
const loginUser = (data) =>{
    return API.post( "user/login",data)
}

const AuthService = {registerUser,loginUser}
export default AuthService