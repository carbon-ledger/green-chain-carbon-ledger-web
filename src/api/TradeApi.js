import {baseResponse} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {publicErrorOperate} from "@/assets/js/PublishUtil.js";
import {message} from "ant-design-vue";

export async function tradeSellApi(getData) {
    let returnData = baseResponse;
    try {
        const res = await request.tradeSell(getData);
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
            console.warn("[REQUEST] TradeApi[tradeSellApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] TradeApi[tradeSellApi]: 请求数据\n', returnData);
    }
    return returnData;
}