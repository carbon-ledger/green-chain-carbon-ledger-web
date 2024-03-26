import {ref} from "vue";
import {
    getBaseResponseDO,
    getLoginInfoVO,
    getRoleCurrentVO,
    getUserProfileVO,
    getVerifyInfoDO,
    getVerifyListDO,
    permissionVO,
    reviewGetOrganizeDO,
    getUserListDO,
    userAddDO, userEditDO, userDeleteDO, userBanDO, roleListDO, userResetDO, roleAddDO, roleEditDO, roleDeleteDO
} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";
import requests from "@/assets/js/Request.js";
import router from "@/router/index.js";
import {roleDeleteVO, roleEditVO, userListVO} from "@/assets/js/VoModel.js";

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
export function reviewResendOrganize(data, projectId) {
    let getData = ref(getBaseResponseDO)
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

export function getReviewList() {
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

export function reviewAddOrganize(data) {
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

export function reviewGetAdmin(id, type) {
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

export function reviewCheckOrganize(id, data) {
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
export function getUserList(data){
    let getUserList = ref( getUserListDO)
    request.getUserList(data).then(res => {
        getUserList.value = res.data
        switch (res.data.output) {
            case "Success":
                message.success("操作成功").then()
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
 * 获取全部用户
 */
export function getAll(data) {
    userListVO.type = 'all';
    getUserList(data);
}

//获取可用账户
export function getAvailable(data) {
    userListVO.type = 'available';
    getUserList(data);
}

/**
 *获取封禁的账户
 */
export function getBanList(data) {
    userListVO.type = 'banlist';
    getUserList(data);
}

/**
 * 增加账户
 */
export function userAdd(data) {
    let  userAdd = ref(userAddDO)
    request.UserAdd(data).then(res => {
        userAdd.value = res.data
    })
    return userAdd;
}

/**
 * 修改账户
 */
export function userManageEdit(uuid,data) {
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
export function userDelete(uuid) {
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
export function userBan(uuid) {
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
export function userReset(uuid) {
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
 * 获取角色列表
 */
export function getRoleList(data){
    let roleList = ref(roleListDO)
    request.getRoleList(data).then(res => {
        roleList.value = res.data
        switch (res.data.output) {
            case "Success":
                message.success("操作成功").then()
                break;
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
    })
    return roleList;
}

/**
 * 新增角色
 * @param data
 */
export function roleAdd(data) {
    let roleAdd = ref(roleAddDO)
    request.RoleAdd(data).then(res => {
        roleAdd.value = res.data
        switch (res.data.output) {
            case "Success":
                message.success("操作成功").then()
                break;
            default:
                message.warn(res.data.message).then()
        }
    }).catch(err => {
       roleAdd.value = err.response.data
        message.warn(err.response.data.message).then()
    })
    return  roleAdd;
}

/**
 * 修改角色
 * @param data
 */
export function roleEdit(uuid, data) {
    let roleEdit = ref(roleEditDO)
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
export function roleDelete(uuid) {
    let roleDelete = ref(roleDeleteDO)
    request.RoleDelete(uuid).then(res => {
        roleEdit.value = res.data
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

export function managerUserRegister(data) {
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
