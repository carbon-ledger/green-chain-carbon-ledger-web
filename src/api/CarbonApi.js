import {baseResponse, carbonOperateListDO, emissionsQuotaDO} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {publicErrorOperate} from "@/utils/PublishUtil.js";
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

export async function carbonOperateList() {
    let returnData = carbonOperateListDO;
    try {
        const res = await request.carbonOperateList();
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
            console.warn("[REQUEST] CarbonApi[carbonOperateList]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[carbonOperateList]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function carbonAdd(getData, organizeUUID) {
    let returnData = baseResponse;
    try {
        const res = await request.carbonAdd(getData, organizeUUID);
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
            console.warn("[REQUEST] CarbonApi[carbonAdd]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[carbonAdd]: 请求数据\n', returnData);
    }
    return returnData;
}