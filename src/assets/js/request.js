import axios from "axios";
import getCurrentTimestamp from "@/assets/js/methods.js";

const api = 'http://192.168.5.234:8081/api/v1'
/**
 * 组织账号注册
 * @param data (organize,username,phone,email,code,invite,password)
 * @return{*}
 */
const OrganizeRegister = (data) => {
    return axios({
        url: api + "/auth/organize/register",
        method: "post",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp()
        }
    })
}

/**
 * 管理员账号注册
 * @param data (organize,username,phone,email,code,invite,password)
 * @return{*}
 */
const ManagerRegister = (data) => {
    return axios({
        url: api + "/auth/admin/register",
        method: "post",
        data: data,
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
const GetCode = (data) => {
    return axios({
        url: api + "/mail/send/code",
        method: "post",
        data: data,
        headers: {
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

/**
 * 忘记密码
 *
 */
const Forget = (data) => {
    return axios({
        url: api + "/auth/forget",
        method:"put",
        data:data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp()
        },
    })
}

/**
 * 修改密码
 */
const Alter = (data) => {
    return axios({
        url:api + "/auth/change",
        method:"patch",
        data:data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 查询当前用户信息
 *
 * @return {Promise<AxiosResponse<any>> | *}
 */
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


/**
 * 查询用户信息
 * @param data
 * @return {Promise<AxiosResponse<any>> | *}
 */
const getUserList = (data) => {
    return axios({
        url: api + "/user/list",
        method: "get",
        params: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}


/**
 * 新增账户
 * @param data (username, realname, phone, email, role)
 * @return {Promise<AxiosResponse<any>> | *}
 */
const UserAdd = (data) => {
    return axios({
        url: api + "/user/add",
        method: "post",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 管理员修改账户
 * @param uuid
 * @param data (userName, nickName, realName, avatar, email, phone)
 */
const UserManagerEdit = (uuid, data) => {
    return axios({
        url: api + "/user/force-edit/" + uuid,
        method: 'PUT',
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}


/**
 * 用户修改账户
 * @param data (nickName, avatar, email, phone, emailCode, phoneCode)
 */
const UserEdit = (data) => {
    return axios({
        url: api + "/user/edit",
        method: "PUT",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}


/**
 * 注销账户
 * @param uuid
 * @return {Promise<AxiosResponse<any>> | *}
 */
const UserDelete = (uuid) => {
    return axios({
        url: api + "/user/force-logout/" + uuid,
        method: "DELETE",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 *
 * 封禁账户
 * @param uuid
 * @return {Promise<AxiosResponse<any>> | *}
 */
const UserBan = (uuid) => {
    return  axios({
        url:api + "/user/ban/" + uuid,
        method:"PATCH",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}


const userLogout = () => {
    return axios({
        url: api + "/auth/logout",
        method: "get",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}


/**
 * 获取角色列表
 * @param data
 *
 */
const getRoleList = (data) => {
    return axios({
        url:api + "/role/list",
        method:"get",
        params:data,
        headers: {
        'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 新增角色
 *@param data (name, displayName, permission)
 */
const RoleAdd = (data) => {
    return axios({
        url:api + "/role/add",
        method:"post",
        data:data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 修改角色
 * @param uuid
 * @param data (name, displayName, permission)
 */
const RoleEdit = (uuid, data) => {
    return axios({
        url:api + "/role/edit/" + uuid,
        method:"put",
        data:data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 删除角色
 * @param uuid
 */
const RoleDelete = (uuid) => {
    return axios({
        url:api + "/role/delete/" + uuid,
        method:"delete",
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
    Forget,
    Alter,
    GetCode,

    getUserCurrent,
    getUserList,
    UserAdd,
    UserManagerEdit,
    UserEdit,
    UserDelete,
    UserBan,
    userLogout,

    getRoleList,
    RoleAdd,
    RoleEdit,
    RoleDelete,

    ManagerRegister
}