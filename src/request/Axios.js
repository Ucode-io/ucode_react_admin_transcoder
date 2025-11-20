import axios from "axios";
import { API_BASE_URL } from "configs/AppConfig";

const token  = localStorage.getItem("auth_token")

export const request = ({url,method,data,headers}) =>{
    return axios({
        baseURL:API_BASE_URL,
        url,
        method,
        data,
        headers
      
    })
}


