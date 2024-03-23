import {ref} from "vue";
import {getLoginInfoVO, getRoleCurrentVO, getUserProfileVO, permissionVO} from "@/assets/js/VoModel.js";
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";

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
    request.GetCode(data).then(res => {
        getData.value = res.data;
        switch (res.data.output) {
            case "Success":
                message.success("验证码发送成功！")
                break
            default:
                message.warn(res.data.message)
        }
    }).catch(err => {
        message.warn(err.response.data.message)
    })
    return getData;
}