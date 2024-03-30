import {emissionsQuotaDO} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {publicErrorOperate} from "@/assets/js/PublishUtil.js";
import {message} from "ant-design-vue";

export async function emissionsQuotaApi(startTime, endTime) {
    let returnData = emissionsQuotaDO;
    try {
        const res = await request.emissionsQuota(startTime, endTime);
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
            console.warn("[REQUEST] CarbonApi[emissionsQuotaApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[emissionsQuotaApi]: 请求数据\n', returnData);
    }
    return returnData;
}