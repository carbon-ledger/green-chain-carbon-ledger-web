import {
    baseResponse,
    carbonOperateListDO,
    emissionsQuotaDO,
    getCarbonAccountingSingleDO,
    getCarbonReportDO, getCarbonReportMaterialsDO, getCarbonReportSingleDO,
    getTypeDO
} from "@/models/DoModel.js";
import request from "@/models/Request.js";
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

export async function createCarbonReportApi(carbonId) {
    let returnData = baseResponse;
    try {
        const res = await request.createCarbonReport(carbonId);
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
            console.warn("[REQUEST] CarbonApi[createCarbonReportApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[createCarbonReportApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getCarbonItemTypeApi() {
    let returnData = getTypeDO;
    try {
        const res = await request.getCarbonItemType();
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
            console.warn("[REQUEST] CarbonApi[getCarbonItemTypeApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[getCarbonItemTypeApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getFactorProcessApi() {
    let returnData = getTypeDO;
    try {
        const res = await request.getFactorProcess();
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
            console.warn("[REQUEST] CarbonApi[getFactorProcessApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[getFactorProcessApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getFactorDesulfurizationApi() {
    let returnData = getTypeDO;
    try {
        const res = await request.getFactorDesulfurization();
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
            console.warn("[REQUEST] CarbonApi[getFactorDesulfurizationApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[getFactorDesulfurizationApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getFactorOtherApi() {
    let returnData = getTypeDO;
    try {
        const res = await request.getFactorOther();
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
            console.warn("[REQUEST] CarbonApi[getFactorOtherApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[getFactorOtherApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getCarbonReportApi(getData) {
    let returnData = getCarbonReportDO;
    try {
        const res = await request.getCarbonReport(getData);
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
            console.warn("[REQUEST] CarbonApi[getCarbonReportApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[getCarbonReportApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getCarbonReportSingleApi(getData) {
    let returnData = getCarbonReportSingleDO;
    try {
        const res = await request.getCarbonReportSingle(getData);
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
            console.warn("[REQUEST] CarbonApi[getCarbonReportSingleApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[getCarbonReportSingleApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getCarbonAccountingSingleApi(getData) {
    let returnData = getCarbonAccountingSingleDO;
    try {
        const res = await request.getCarbonAccountingSingle(getData);
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
            console.warn("[REQUEST] CarbonApi[getCarbonAccountingSingleApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[getCarbonAccountingSingleApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getCarbonReviewReportApi() {
    let returnData = getCarbonReportDO;
    try {
        const res = await request.getCarbonReviewReport();
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
            console.warn("[REQUEST] CarbonApi[getCarbonReviewReportApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[getCarbonReviewReportApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getCarbonReportMaterialsApi(getData) {
    let returnData = getCarbonReportMaterialsDO;
    try {
        const res = await request.getCarbonReportMaterials(getData);
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
            console.warn("[REQUEST] CarbonApi[getCarbonReportMaterialsApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[getCarbonReportMaterialsApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function checkCarbonReportApi(getData) {
    let returnData = baseResponse;
    try {
        const res = await request.checkCarbonReport(getData);
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
            console.warn("[REQUEST] CarbonApi[checkCarbonReportApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] CarbonApi[checkCarbonReportApi]: 请求数据\n', returnData);
    }
    return returnData;
}