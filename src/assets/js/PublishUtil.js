import {ref} from "vue";
import {
    baseResponse,
    getUserListDO,
    userAddDO, userEditDO, userDeleteDO, userBanDO
} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";
import requests from "@/assets/js/Request.js";
import router from "@/router/index.js";
import {roleEditVO} from "@/assets/js/VoModel.js";
/**
 * 重新发送审核
 *
 * 重新发送审核请求, 会根据传入的数据重新发送审核请求, 并返回审核结果, 如果审核成功则返回审核结果, 如果审核失败则返回失败原因
 *
 * @param {Object} data
 * @param {String} projectId
 */
export function reviewResendOrganizeRequest(data, projectId) {
    let getData = ref(baseResponse)
    request.reviewResendOrganize(data, projectId).then(res => {
        switch (res.data.output) {
            case "Success":
                getData.value = res.data
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
/**
 * 获取用户列表
 */
export function getUserListRequest(type, data){
    let getUserList = ref( getUserListDO)
    data.type = type;
    request.getUserList(data).then(res => {
        getUserList.value = res.data
        switch (res.data.output) {
            case "Success":
                break
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        switch (err.response.data.output) {
            case "TokenVerifyError": {
                message.warn(err.response.data.data.errorMessage).then()
                window.location.replace("/auth/login")
                break;
            }
            default:
                message.warn(err.response.data.message).then()
        }
    });
    return getUserList;
}

/**
 * 增加账户
 */
export function userAddRequest(data) {
    let  userAdd = ref(userAddDO)
    request.UserAdd(data).then(res => {
        userAdd.value = res.data
    })
    return userAdd;
}

/**
 * 修改账户
 */
export function userManageEditRequest(uuid, data) {
    let userEdit = ref(userEditDO)
    request. UserManagerEdit(uuid,data).then(res => {
        userEdit.value = res.data
        switch (res.data.output) {
            case "Success":
                message.success("操作成功").then()
                break;
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        userEdit.value = err.response.data
        message.warn(err.response.data.message).then()
    })
    return userEdit;
}

/**
 * 注销账户
 */
export function userDeleteRequest(uuid) {
    let userDelete = ref(userDeleteDO)
    request.UserDelete(uuid).then(res => {
        userDelete.value = res.data
        switch (res.data.output) {
            case "Success":
                message.success("操作成功").then()
                break;
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        userDelete.value = err.response.data
        message.warn(err.response.data.message).then()
    })
    return  userDelete;
}

/**
 * 封禁账户
 */
export function userBanRequest(uuid) {
    let userBan = ref(userBanDO)
    request.UserBan(uuid).then(res => {
        userBan.value = res.data
        switch (res.data.output) {
            case "Success":
                message.success("操作成功").then()
                break;
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        userBan.value = err.response.data
        message.warn(err.response.data.message).then()
    })
    return  userBan;
}
/**
 * 修改角色
 * @param uuid
 * @param data
 */
export function roleEditRequest(uuid, data) {
    let roleEdit = ref(roleEditVO)
    request.roleEdit(uuid, data).then(res => {
        roleEdit.value = res.data
        switch (res.data.output) {
            case "Success":
                message.success("操作成功").then()
                break;
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        roleEdit.value = err.response.data
        message.warn(err.response.data.message).then()
    })
    return  roleEdit;
}
export function managerUserRegisterRequest(data) {
    requests.ManagerRegister(data).then((res) => {
        switch (res.data.output) {
            case "Success":
                message.success('注册成功，请登录');
                router.push("/auth/userLogin");
                break;
            default:
                console.log(res.data.message);
        }
    }).catch((err) => {
        switch (err.response.data.output) {
            case "RequestBodyError":
                message.error(err.response.data.data[0]);
                break;
            case "OrganizeRegisterFailed":
                message.error(err.response.data.data.errorMessage);
                break;
            case "UsernameExisted":
                message.error(err.response.data.data.errorMessage);
                break;
            default:
                message.error(err.response.data.message);
        }
    });
}

export async function publicErrorOperate(err) {
    switch (err.response.data.output) {
        case "RequestBodyError":
            message.warn(err.response.data.data[0]);
            return true;
        case "TokenVerifyError":
            message.warn(err.response.data.data.errorMessage);
            setTimeout(_ => {
                router.replace({ name: 'LoginAccount' });
            }, 500);
            break;
    }
    return false;
}
