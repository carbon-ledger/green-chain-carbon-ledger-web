import {
    userBanDO,
    userCurrentDO,
    userForceEditDO,
    userForceDeleteDO,
    userListDO, userAddDO, resetPasswordDO
} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import router from "@/router/index.js";
import {publicErrorOperate} from "@/assets/js/PublishUtil.js";
import {message} from "ant-design-vue";

export async function getUserCurrentApi() {
    let returnData = userCurrentDO;
    try {
        const res = await request.getUserCurrent();
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            returnData = err.response.data;
            await router.replace({name: 'LoginAccount', replace: true});
        } else {
            // 处理无法访问err.response的情况
            console.warn("[REQUEST] UserApi[getUserCurrentApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] UserApi[getUserCurrentApi]: 请求数据\n', returnData);
    }
    return returnData
}

export async function getUserCurrentIndexApi() {
    let returnData = userCurrentDO;
    try {
        const res = await request.getUserCurrent();
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            returnData = err.response.data;

        } else {
            // 处理无法访问err.response的情况
            console.warn("[REQUEST] UserApi[getUserCurrentApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] UserApi[getUserCurrentApi]: 请求数据\n', returnData);
    }
    return returnData
}

export async function userForceDeleteApi(getData) {
    let returnData = userForceDeleteDO;
    try {
        const res = await request.userForceDelete(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            returnData = err.response.data;
            if (!await publicErrorOperate(err)) {
                switch (err.response.data.output) {
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] UserApi[userForceDeleteApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] UserApi[userForceDeleteApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function userBanApi(getData) {
    let returnData = userBanDO;
    try {
        const res = await request.userBan(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            returnData = err.response.data;
            if (!await publicErrorOperate(err)) {
                switch (err.response.data.output) {
                    case "UserCannotBeOperate":
                        message.info(err.response.data.data.errorMessage);
                        break;
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] UserApi[userBanApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] UserApi[userBanApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function userResetPasswordApi(getData) {
    let returnData = resetPasswordDO;
    try {
        const res = await request.userResetPassword(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            returnData = err.response.data;
            if (!await publicErrorOperate(err)) {
                switch (err.response.data.output) {
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] UserApi[userResetPasswordApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] UserApi[userResetPasswordApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function userForceEditApi(getData) {
    let returnData = userForceEditDO;
    try {
        const res = await request.userForceEdit(getData.uuid, getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            returnData = err.response.data;
            if (!await publicErrorOperate(err)) {
                switch (err.response.data.output) {
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] UserApi[userForceEditApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] UserApi[userForceEditApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function userAddConsoleApi(getData) {
    let returnData = userAddDO;
    try {
        const res = await request.userAddConsole(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            returnData = err.response.data;
            if (!await publicErrorOperate(err)) {
                switch (err.response.data.output) {
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] UserApi[userAddConsoleApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] UserApi[userAddConsoleApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getUserListApi(type, getData) {
    let returnData = userListDO;
    getData.type = type;
    try {
        const res = await request.getUserList(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            returnData = err.response.data;
            if (!await publicErrorOperate(err)) {
                switch (err.response.data.output) {
                    default:
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] UserApi[getUserListApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] UserApi[getUserListApi]: 请求数据\n', returnData);
    }
    return returnData;
}