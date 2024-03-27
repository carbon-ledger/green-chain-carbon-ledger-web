import {ref} from "vue";
import {
    baseResponse,
    getLoginInfoVO,
    getRoleCurrentVO,
    getUserProfileVO,
    getVerifyInfoDO,
    getVerifyListDO,
    reviewGetOrganizeDO,
    getUserListDO,
    userAddDO, userEditDO, userDeleteDO, userBanDO, userResetDO, roleDeleteDO
} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";
import requests from "@/assets/js/Request.js";
import router from "@/router/index.js";
import {roleEditVO} from "@/assets/js/VoModel.js";

/**
 * 获取用户的信息
 *
 * 会根据用户的登陆信息访问，返回当前登陆用户的数据内容
 *
 * @return {Ref<UnwrapRef<{role: string, permission: {rolePermission: [], userPermission: []}, user: {realName: string, phone: string, userName: string, uuid: string, email: string}}>>}
 */
export function getUserCurrentRequest() {
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

export function getLoginInfoRequest() {
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

export function getRoleCurrentRequest() {
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

/**
 * 发送邮箱验证码
 *
 * @param {Object} data
 */
export function sendMailCodeRequest(data) {
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

export function reviewGetRequest() {
    let getData = ref(getVerifyInfoDO)
    request.reviewGet().then(res => {
        switch (res.data.output) {
            case "Success":
                getData.value = res.data
                break
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        switch (err.response.data.output) {
            case "ReviewError":
                break
            default:
                message.warn(err.response.data.message).then()
        }
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
export function reviewResendOrganizeRequest(data, projectId) {
    let getData = ref(baseResponse)
    request.ReviewResendOrganize(data, projectId).then(res => {
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

export function getReviewListRequest() {
    let getData = ref([getVerifyListDO])
    request.getReviewList().then(res => {
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

export function reviewAddOrganizeRequest(data) {
    request.reviewAddOrganize(data).then(res => {
        switch (res.data.output) {
            case "Success":
                message.success("成功发送审核").then()
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
                break
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        message.warn(err.response.data.message).then()
    })
}

export function reviewGetAdminRequest(id, type) {
    let getData = ref(reviewGetOrganizeDO)
    request.reviewGetAdmin(id, type).then(res => {
        getData.value = res.data
        switch (res.data.output) {
            case "Success":
                break
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        getData.value = err.response.data
        switch (err.response.data.output) {
            case "ReviewError":
                break
            default:
                message.warn(err.response.data.message).then()
        }
    })
    console.debug(getData)
    return getData;
}

export function reviewCheckOrganizeRequest(id, data) {
    let getData = ref(reviewGetOrganizeDO)
    request.ReviewCheckOrganize(id, data).then(res => {
        switch (res.data.output) {
            case "Success":
                getData.value = res.data
                break
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        switch (err.response.data.output) {
            case "ReviewError":
                break
            default:
                message.warn(err.response.data.message).then()
        }
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
 * 账户密码重置
 */
export function userResetRequest(uuid) {
    let userReset = ref(userResetDO)
    request.UserReset(uuid).then(res => {
        userReset.value = res.data
        switch (res.data.output) {
            case "Success":
                message.success("操作成功").then()
                break;
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        userReset.value = err.response.data
        message.warn(err.response.data.message).then()
    })
    return  userReset;
}

/**
 * 新增角色
 * @param data
 */
export function roleAddRequest(data) {
    let returnData = ref(baseResponse)
    request.RoleAdd(data).then(res => {
        returnData.value = res.data
        switch (res.data.output) {
            case "Success":
                message.success("操作成功").then()
                break;
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
       returnData.value = err.response.data
        message.warn(err.response.data.message).then()
    })
    return returnData;
}

/**
 * 修改角色
 * @param uuid
 * @param data
 */
export function roleEditRequest(uuid, data) {
    let roleEdit = ref(roleEditVO)
    request.RoleEdit(uuid, data).then(res => {
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

/**
 * 删除角色
 * @param uuid
 */
export function roleDeleteRequest(uuid) {
    let roleDelete = ref(roleDeleteDO)
    request.RoleDelete(uuid).then(res => {
        roleEditRequest.value = res.data
        switch (res.data.output) {
            case "Success":
                message.success("操作成功").then()
                break;
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
        roleDelete.value = err.response.data
        message.warn(err.response.data.message).then()
    })
    return  roleDelete;
}

export function managerUserRegisterRequest(data) {
    requests.ManagerRegister(data).then((res) => {
        switch (res.data.output) {
            case "Success":
                message.success('注册成功，请登录');
                router.push("/auth/login");
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
