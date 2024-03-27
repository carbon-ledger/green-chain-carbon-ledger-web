import axios from "axios";
import getCurrentTimestamp from "@/assets/js/methods.js";

/**
 * 配置Api使用地址
 *
 * @type {string}
 */
export const api = 'http://192.168.5.234:8081/api/v1'

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
 * @params userChangePassword (email, template)
 * @return{*}
 */
const getCode = (data) => {
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
 *@param data
 */
const Forget = (data) => {
    return axios({
        url: api + "/auth/forget",
        method: "put",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp()
        },
    })
}

/**
 * 修改密码
 * @param data
 */
const userPasswordChange = (data) => {
    return axios({
        url: api + "/auth/change",
        method: "patch",
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
    return axios({
        url: api + "/user/ban/" + uuid,
        method: "PATCH",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 重置账户密码
 */
const UserReset = (data) => {
    return axios({
        url: api + "/admin/user/reset/password",
        method: "PATCH",
        data: data,
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
        url: api + "/role/list",
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
 * 新增角色
 *@param data (name, displayName, permission)
 */
const RoleAdd = (data) => {
    return axios({
        url: api + "/role/add",
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
 * 修改角色
 * @param uuid
 * @param data (name, displayName, permission)
 */
const RoleEdit = (uuid, data) => {
    return axios({
        url: api + "/role/edit/" + uuid,
        method: "put",
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
 * 删除角色
 * @param uuid
 */
const RoleDelete = (uuid) => {
    return axios({
        url: api + "/role/delete/" + uuid,
        method: "delete",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

const getLoginInfo = () => {
    return axios({
        url: api + "/auth/login-info",
        method: "get",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

const getRoleCurrent = () => {
    return axios({
        url: api + "/role/current",
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
 * 获取权限列表
 */
const getPermissionList = () => {
    return axios({
        url: api + "/permission/list",
        method: "get",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

const getAuthDelete = (data) => {
    return axios({
        url: api + "/auth/delete",
        method: "delete",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

const userLoginOut = () => {
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
 * 获取实名信息待审列表
 * @param data (type)
 */
const getReviewList = (data) => {
    return axios({
        url: api + "/review/list",
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
 * 审核管理实名信息
 * @param checkId
 * @param data
 */
const ReviewCheckAdmin = (checkId, data) => {
    return axios({
        url: api + "/review/check/admin/" + checkId,
        method: "PATCH",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
        }
    })
}

/**
 *审核组织实名信息
 * @param checkId
 * @param data
 */
const ReviewCheckOrganize = (checkId, data) => {
    return axios({
        url: api + "/review/check/organize/" + checkId,
        method: "PATCH",
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
 * 监管账户发起审核
 */
const ReviewAddAdmin = () => {
    return axios({
        url: api + "/review/add/admin",
        method: "POST",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 组织账户发起审核
 */
const reviewAddOrganize = (data) => {
    return axios({
        url: api + "/review/add/organize",
        method: "POST",
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
 * 重新发送审核
 *
 * 该接口用于支持用户重新申请组织用户发起审核的功能。用户可以通过此接口提交自己的申请信息，包括但不限于个人信息、组织信息以及申请理由等，系统将对提交的信息进行审核处理。
 *
 * @param data
 * @param checkId
 */
const ReviewResendOrganize = (data, checkId) => {
    return axios({
        url: api + "/review/re-send/organize/" + checkId,
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
 * 重新申请监管账户发起审核
 * @param data
 * @param checkId
 */
const ReviewResendAdmin = (data, checkId) => {
    return axios({
        url: api + "/review/re-send/admin/" + checkId,
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
 * 获取审核结果信息
 */
const reviewGet = () => {
    return axios({
        url: api + "/review/get",
        method: "GET",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': getCurrentTimestamp(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

const reviewGetAdmin = (id, type) => {
    return axios({
        url: api + "/review/check",
        method: "GET",
        params: {
            id: id,
            type: type
        },
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
    userPasswordChange,
    getCode,
    getUserCurrent,
    getUserList,
    UserAdd,
    UserManagerEdit,
    UserEdit,
    UserDelete,
    UserBan,
    UserReset,
    userLogout,
    getRoleList,
    RoleAdd,
    RoleEdit,
    RoleDelete,
    ManagerRegister,
    getLoginInfo,
    getRoleCurrent,
    getPermissionList,
    getAuthDelete,
    getReviewList,
    ReviewCheckAdmin,
    ReviewCheckOrganize,
    ReviewAddAdmin,
    reviewAddOrganize,
    ReviewResendOrganize,
    ReviewResendAdmin,
    reviewGet,
    userLoginOut,
    reviewGetAdmin
}