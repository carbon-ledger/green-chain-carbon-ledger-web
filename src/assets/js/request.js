import axios from "axios";
import getCurrentTimestamp from "@/assets/js/methods.js";
const api = 'http://localhost:8081/api/v1'
/**
 * 组织账号注册
 * @param data (organize,username,phone,email,code,invite,password)
 * @return{*}
 */
const OrganizeRegister = (data) =>{
    return axios({
        url:api + "/auth/organize/register",
        method:"post",
        data:data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp()
        }
    })
}

/**
 * 获取邮箱验证码
 * @params data (email, template)
 * @return{*}
 */
const GetCode = (data) =>{
    return axios({
        url:api + "/mail/send/code",
        method:"post",
        data:data,
        headers:{
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp()
        }
    })
}



/**
 * 登录
 * @param data (user,password)
 * @returns {*}
 */
const login = (data) => {
    return axios({
        url: api + "/auth/login",
        method: "post",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp()
        },
    })
}

const getUserCurrent = () => {
    return axios({
        url: api + "/user/current",
        method: "get",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

export default {
    OrganizeRegister,
    login,
    GetCode,
    getUserCurrent
}