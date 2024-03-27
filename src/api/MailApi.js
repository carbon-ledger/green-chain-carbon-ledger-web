import {baseResponse} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";
import {publicErrorOperate} from "@/assets/js/PublishUtil.js";

export async function sendCodeMailApi(getData) {
    let returnData = baseResponse;
    try {
        const res = await request.sendCodeMail(getData);
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
            console.warn("[REQUEST] MailApi[sendCodeMailApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] MailApi[sendCodeMailApi]: 请求数据', returnData);
    }
    return returnData;
}