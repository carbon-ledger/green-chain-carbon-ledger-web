import axios from "axios";

/**
 * 配置Api使用地址
 *
 * @type {string}
 */
export const api = 'http://localhost:8081/api/v1'

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
            'X-Timestamp': new Date().getTime()
        }
    })
}

/**
 * 管理员账号注册
 * @param data (organize,username,phone,email,code,invite,password)
 * @return{*}
 */
const managerRegister = (data) => {
    return axios({
        url: api + "/auth/admin/register",
        method: "post",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime()
        }
    })
}

/**
 * 发送验证码到邮箱
 * @params userChangePassword (email, template)
 * @return{*}
 */
const sendCodeMail = (data) => {
    return axios({
        url: api + "/mail/send/code",
        method: "post",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime()
        }
    })
}

/**
 * 发送邮件
 * @params userChangePassword (email, template)
 * @return{*}
 */
const sendMail = (data) => {
    return axios({
        url: api + "/mail/send/code",
        method: "post",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime()
        }
    })
}


/**
 * 登录
 * @param data (user,password)
 * @returns {*}
 */
const userLogin = (data) => {
    return axios({
        url: api + "/auth/login",
        method: "post",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime()
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
            'X-Timestamp': new Date().getTime()
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
            'X-Timestamp': new Date().getTime(),
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
            'X-Timestamp': new Date().getTime(),
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
            'X-Timestamp': new Date().getTime(),
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
const userAddConsole = (data) => {
    return axios({
        url: api + "/user/add",
        method: "post",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
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
const userForceEdit = (uuid, data) => {
    return axios({
        url: api + "/user/force-edit/" + uuid,
        method: 'PUT',
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}


/**
 * 用户修改账户
 * @param data (nickName, avatar, email, phone, emailCode, phoneCode)
 */
const userEdit = (data) => {
    return axios({
        url: api + "/user/edit",
        method: "PUT",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
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
const userForceDelete = (uuid) => {
    return axios({
        url: api + "/user/force-logout/" + uuid,
        method: "DELETE",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
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
const userBan = (uuid) => {
    return axios({
        url: api + "/user/ban/" + uuid,
        method: "PATCH",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 重置账户密码
 */
const userResetPassword = (data) => {
    return axios({
        url: api + "/admin/user/reset/password",
        method: "PATCH",
        data: {
            uuid: data
        },
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
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
            'X-Timestamp': new Date().getTime(),
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
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 新增角色
 *@param data (name, displayName, permission)
 */
const roleAdd = (data) => {
    return axios({
        url: api + "/role/add",
        method: "post",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
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
const roleEdit = (uuid, data) => {
    return axios({
        url: api + "/role/edit/" + uuid,
        method: "put",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 删除角色
 * @param uuid
 */
const roleDelete = (uuid) => {
    return axios({
        url: api + "/role/delete/" + uuid,
        method: "delete",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

const loginInfo = () => {
    return axios({
        url: api + "/auth/login-info",
        method: "get",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
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
            'X-Timestamp': new Date().getTime(),
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
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

const userDelete = (data) => {
    return axios({
        url: api + "/auth/delete",
        method: "delete",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
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
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 获取实名信息待审列表
 * @param data (type)
 */
const reviewList = (data) => {
    return axios({
        url: api + "/review/list",
        method: "get",
        params: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
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
const reviewCheckAdmin = (checkId, data) => {
    return axios({
        url: api + "/review/check/admin/" + checkId,
        method: "PATCH",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
        }
    })
}

/**
 *审核组织实名信息
 * @param checkId
 * @param data
 */
const reviewCheckOrganize = (data, checkId) => {
    return axios({
        url: api + "/review/check/organize/" + checkId,
        method: "PATCH",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
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
            'X-Timestamp': new Date().getTime(),
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
            'X-Timestamp': new Date().getTime(),
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
const reviewResendOrganize = (data, checkId) => {
    return axios({
        url: api + "/review/re-send/organize/" + checkId,
        method: "PUT",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
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
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 获取审核结果信息
 *
 * @returns {Promise<AxiosResponse<any>> | *}
 */
const reviewGet = () => {
    return axios({
        url: api + "/review/get",
        method: "GET",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 获取审核结果信息, 仅供控制台使用
 *
 * @param id
 * @param type
 * @returns {Promise<AxiosResponse<any>> | *}
 */
const reviewGetConsoleCheck = (id, type) => {
    return axios({
        url: api + "/review/check",
        method: "GET",
        params: {
            id: id,
            type: type
        },
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 获取碳额度
 *
 * @param start
 * @param end
 * @returns {Promise<AxiosResponse<any>> | *}
 */
const emissionsQuota = (start, end) => {
    return axios({
        url: api + "/carbon/quota/get",
        method: "GET",
        params: {
            start: start,
            end: end
        },
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

const tradeSell = (data) => {
    return axios({
        url: api + "/trade/sell",
        method: "POST",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 获取几年未分配碳配额的列表
 *
 * @returns {Promise<AxiosResponse<any>> | *}
 */
const carbonOperateList = () => {
    return axios({
        url: api + "/carbon/operate/list",
        method: "GET",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 添加碳配额，为还未分配的组织进行谈配额的分配操作
 *
 * @param data
 * @param organizeUuid
 * @returns {Promise<AxiosResponse<any>> | *}
 */
const carbonAdd = (data, organizeUuid) => {
    return axios({
        url: api + "/carbon/add/" + organizeUuid,
        method: "POST",
        data: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 获取自己组织碳交易发布的信息列表
 *
 * @param data
 * @returns {Promise<AxiosResponse<any>> | *}
 */
const tradeSend = (data) => {
    return axios({
        url: api + "/trade/send",
        method: "GET",
        params: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 获取组织碳交易审核的信息列表
 * @returns {Promise<AxiosResponse<any>> | *}
 */
const tradeReview = () => {
    return axios({
        url: api + "/trade/review",
        method: "GET",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 碳交易的审核通过或者拒绝
 *
 * @param data
 * @returns {Promise<AxiosResponse<any>> | *}
 */
const tradeReviewPass = (data) => {
    return axios({
        url: api + "/trade/review/" + data.tradeId,
        method: "PATCH",
        params: {
            pass: data.pass
        },
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 获取碳交易市场
 * @param data
 * @returns {Promise<AxiosResponse<any>> | *}
 */
const tradeList = (data) => {
    return axios({
        url: api + "/trade/list",
        method: "GET",
        params: data,
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 购买碳
 *
 * @param tradeId
 * @returns {Promise<AxiosResponse<any>> | *}
 */
const tradeBuy = (tradeId) => {
    return axios({
        url: api + "/trade/buy/" + tradeId,
        method: "PATCH",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

/**
 * 获取碳交易银行
 *
 * @returns {Promise<AxiosResponse<any>> | *}
 */
const getTradeBank = (tradeId) => {
    return axios({
        url: api + "/trade/bank",
        method: "GET",
        params: {
            tradeId: tradeId
        },
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

const getMyBuyTrade = () => {
    return axios({
        url: api + "/trade/buy",
        method: "GET",
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'X-Timestamp': new Date().getTime(),
            'Authorization': localStorage.getItem("AuthorizationToken"),
            'X-Auth-UUID': localStorage.getItem("X-Auth-UUID"),
        }
    })
}

export default {
    OrganizeRegister,
    userLogin,
    Forget,
    userPasswordChange,
    sendCodeMail,
    sendMail,
    getUserCurrent,
    getUserList,
    userAddConsole,
    userForceEdit,
    userEdit,
    userForceDelete,
    userBan,
    userResetPassword,
    userLogout,
    getRoleList,
    roleAdd,
    roleEdit,
    roleDelete,
    managerRegister,
    loginInfo,
    getRoleCurrent,
    getPermissionList,
    userDelete,
    reviewList,
    reviewCheckAdmin,
    reviewCheckOrganize,
    ReviewAddAdmin,
    reviewAddOrganize,
    reviewResendOrganize,
    ReviewResendAdmin,
    reviewGet,
    userLoginOut,
    reviewGetConsoleCheck,
    emissionsQuota,
    tradeSell,
    carbonOperateList,
    carbonAdd,
    tradeSend,
    tradeReview,
    tradeReviewPass,
    tradeList,
    tradeBuy,
    getTradeBank,
    getMyBuyTrade
}