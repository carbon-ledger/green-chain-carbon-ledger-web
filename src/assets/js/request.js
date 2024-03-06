import axios from "axios";
import getCurrentTimestamp from "@/js/methods.js";
const api = 'https://nbxt.oa.x-lf.cn'

/**
 * 登录
 * @param data (user,password)
 * @returns {*}
 */
const login = (data) => {
    return axios({
        url: api+"/auth/login",
        method: "post",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Timestamp': getCurrentTimestamp()
        },
    })
}