import {baseResponse, getUserProfileVO} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";
import {publicErrorOperate} from "@/assets/js/PublishUtil.js";

export async function getUserCurrentApi() {
    let returnData = getUserProfileVO;
    try {
        const res = await request.getUserCurrent();
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            switch (err.response.data.output) {
                default:
                    returnData = err.response.data;
                    message.warn(err.response.data.message);
            }
        } else {
            // 处理无法访问err.response的情况
            message.warn("[REQUEST] UserApi[getUserCurrentApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] UserApi[getUserCurrentApi]: 请求数据\n', returnData);
    }
    return returnData
}

export async function userPasswordChangeApi(getData) {
    let returnData = baseResponse;
    try {
        const res = await request.userPasswordChange(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            if (!await publicErrorOperate(err)) {
                switch (err.response.data.output) {
                    default:
                        returnData = err.response.data;
                        message.warn(err.response.data.message);
                }
            }
        } else {
            // 处理无法访问err.response的情况
            message.warn("[REQUEST] UserApi[getUserCurrentApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] UserApi[getUserCurrentApi]: 请求数据\n', returnData);
    }
    return returnData
}