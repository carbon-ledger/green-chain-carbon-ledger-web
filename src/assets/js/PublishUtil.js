import {ref} from "vue";
import {
    getLoginInfoVO,
    getRoleCurrentVO,
    getUserProfileVO,
    getVerifyInfoDO,
    permissionVO
} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";
import {UserVerifyVO} from "@/assets/js/VoModel.js";

/**
 * 获取用户的信息
 *
 * 会根据用户的登陆信息访问，返回当前登陆用户的数据内容
 *
 * @return {Ref<UnwrapRef<{role: string, permission: {rolePermission: [], userPermission: []}, user: {realName: string, phone: string, userName: string, uuid: string, email: string}}>>}
 */
export function getUserCurrent() {
    let getUserVO = ref(getUserProfileVO)
    request.getUserCurrent().then(res => {
        switch (res.data.output) {
            case "Success":
                getUserVO.value = res.data.data;
                break
            default:
                message.warn(res.data.message)
        }
    }).catch(err => {
        switch (err.response.data.output) {
            case "TokenVerifyError": {
                message.warn(err.response.data.data.errorMessage)
                window.location.replace("/auth/login")
                break;
            }
            default:
                message.warn(err.response.data.message)
        }
    })
    return getUserVO
}

export function getLoginInfo() {
    let getLoginInfo = ref(getLoginInfoVO)
    request.getLoginInfo().then(res => {
        switch (res.data.output) {
            case "Success":
                getLoginInfo.value = res.data.data;
                break
            default:
                message.warn(res.data.message)
        }
    }).catch(err => {
        switch (err.response.data.output) {
            case "TokenVerifyError": {
                message.warn(err.response.data.data.errorMessage)
                window.location.replace("/auth/login")
                break;
            }
            default:
                message.warn(err.response.data.message)
        }
    });
    return getLoginInfo;
}

export function getRoleCurrent() {
    let getRoleCurrent = ref(getRoleCurrentVO)
    request.getRoleCurrent().then(res => {
        switch (res.data.output) {
            case "Success":
                getRoleCurrent.value = res.data.data;
                break
            default:
                message.warn(res.data.message)
        }
    }).catch(err => {
        switch (err.response.data.output) {
            case "TokenVerifyError": {
                message.warn(err.response.data.data.errorMessage)
                window.location.replace("/auth/login")
                break;
            }
            default:
                message.warn(err.response.data.message)
        }
    });
    return getRoleCurrent;
}

export function getPermissionList() {
    let getPermissionList = ref([permissionVO])
    request.getPermissionList().then(res => {
        switch (res.data.output) {
            case "Success":
                getPermissionList.value = res.data.data;
                break
            default:
                message.warn(res.data.message)
        }
    }).catch(err => {
        switch (err.response.data.output) {
            case "TokenVerifyError": {
                message.warn(err.response.data.data.errorMessage)
                window.location.replace("/auth/login")
                break;
            }
            default:
                message.warn(err.response.data.message)
        }
    });
    return getPermissionList;
}

/**
 * 发送邮箱验证码
 *
 * @param {Object} data
 */
export function sendMailCode(data) {
    let getData = ref([])
    request.getCode(data).then(res => {
        switch (res.data.output) {
            case "Success":
                getData.value = res.data.data;
                message.success("验证码已发送，有效期15分钟").then()
                break
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        message.warn(err.response.data.message).then()
    })
    console.log(getData)
    return getData;
}

export function reviewGet() {
    let getData = ref(getVerifyInfoDO)
    request.reviewGet().then(res => {
        switch (res.data.output) {
            case "Success":
                getData.value = res.data.data
                break
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        message.warn(err.response.data.message).then()
    })
    console.debug(getData)
    return getData;
}

/**
 * 重新发送审核
 *
 * 重新发送审核请求, 会根据传入的数据重新发送审核请求, 并返回审核结果, 如果审核成功则返回审核结果, 如果审核失败则返回失败原因
 *
 * @param {Object} data
 * @param {String} projectId
 */
export function reviewReSend(data, projectId) {
    let getData = ref(UserVerifyVO)
    request.reviewReSend(data, projectId).then(res => {
        switch (res.data.output) {
            case "Success":
                getData.value = res.data.data
                message.success("成功发送审核").then()
                break
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        message.warn(err.response.data.message).then()
    })
    console.debug(getData)
    return getData;
}