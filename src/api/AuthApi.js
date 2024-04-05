import {baseResponse, userLoginDO, userLoginInfoDO, userRegisterDO} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {publicErrorOperate} from "@/utils/PublishUtil.js";
import {message} from "ant-design-vue";
import router from "@/router/index.js";

export async function managerRegisterApi(getData) {
    let returnData = userRegisterDO;
    try {
        const res = await request.managerRegister(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            if (!await publicErrorOperate(err)) {
                returnData = err.response.data;
                switch (err.response.data.output) {
                    case "OrganizeRegisterFailed":
                        message.error(err.response.data.data.errorMessage);
                        break;
                    case "UsernameExisted":
                        message.error(err.response.data.data.errorMessage);
                        break;
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] AuthApi[managerRegisterApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] AuthApi[managerRegisterApi]: 请求数据\n', returnData);
    }
    return returnData;
}

/**
 * 用户登陆Api
 *
 * @param getData
 * @return {Promise<{data: {role: {displayName: string, name: string}, recover: boolean, permission: {rolePermission: [], userPermission: []}, user: {realName: string, phone: string, userName: string, uuid: string, email: string}, token: string}, baseResponse: {output: string, code: number, message: string}}>}
 */
export async function userLoginApi(getData) {
    let returnData = userLoginDO;
    try {
        const res = await request.userLogin(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            if (!await publicErrorOperate(err)) {
                returnData = err.response.data;
                switch (err.response.data.output) {
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] AuthApi[userLoginApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] AuthApi[userLoginApi]: 请求数据\n', returnData);
    }
    return returnData;
}

/**
 * 用户修改密码Api
 *
 * @param getData
 * @return {Promise<{output: string, code: number, message: string}>}
 */
export async function userPasswordChangeApi(getData) {
    let returnData = baseResponse;
    try {
        const res = await request.userPasswordChange(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            if (!await publicErrorOperate(err)) {
                returnData = err.response.data;
                switch (err.response.data.output) {
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] AuthApi[userPasswordChangeApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] AuthApi[userPasswordChangeApi]: 请求数据\n', returnData);
    }
    return returnData;
}

/**
 * 用户账户注销
 *
 * @param getData
 * @return {Promise<{output: string, code: number, message: string}>}
 */
export async function userDeleteApi(getData) {
    let returnData = baseResponse;
    try {
        const res = await request.userDelete(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            if (!await publicErrorOperate(err)) {
                returnData = err.response.data;
                switch (err.response.data.output) {
                    case "UserCannotBeOperate":
                        message.warn(err.response.data.data.errorMessage);
                        break;
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] AuthApi[userDeleteApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] AuthApi[userDeleteApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function userLogoutApi() {
    let returnData = baseResponse;
    try {
        const res = await request.userLoginOut();
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            if (!await publicErrorOperate(err)) {
                returnData = err.response.data;
                await router.replace({name: "AccountLogin", replace: true});
                switch (err.response.data.output) {
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] AuthApi[userLogoutApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] AuthApi[userLogoutApi]: 请求数据\n', returnData);
    }
    return returnData;
}

/**
 * 获取用户的登陆信息
 *
 * @return {Promise<{data: [{deviceType: string, loginTime: string, expireTime: string, userIp: string, browserType: string}], baseResponse: {output: string, code: number, message: string}}>}
 */
export async function userLoginDeviceApi() {
    let returnData = userLoginInfoDO;
    try {
        const res = await request.loginInfo();
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            if (!await publicErrorOperate(err)) {
                returnData = err.response.data;
                switch (err.response.data.output) {
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] AuthApi[userLoginDeviceApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] AuthApi[userLoginDeviceApi]: 请求数据\n', returnData);
    }
    return returnData;
}