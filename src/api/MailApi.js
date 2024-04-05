import {baseResponse} from "@/models/DoModel.js";
import request from "@/models/Request.js";
import {message} from "ant-design-vue";
import {publicErrorOperate} from "@/utils/PublishUtil.js";

export async function sendCodeMailApi(getData) {
    let returnData = baseResponse;
    try {
        const res = await request.sendCodeMail(getData);
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
            // 处理无法访问err.response的情况
            console.warn("[REQUEST] MailApi[sendCodeMailApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] MailApi[sendCodeMailApi]: 请求数据\n', returnData);
    }
    return returnData;
}