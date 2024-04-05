import {reviewCheckConsoleDO, reviewDO} from "@/models/DoModel.js";
import request from "@/models/Request.js";
import {publicErrorOperate} from "@/utils/PublishUtil.js";
import {message} from "ant-design-vue";

export async function reviewGetApi() {
    let returnData = reviewDO;
    try {
        const res = await request.reviewGet();
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            if (!await publicErrorOperate(err)) {
                returnData = err.response.data;
            }
        } else {
            // 处理无法访问err.response的情况
            console.warn("[REQUEST] ReviewApi[reviewGetApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] ReviewApi[reviewGetApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getReviewListApi() {
    let returnData = reviewDO;
    try {
        const res = await request.reviewList();
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
            console.warn("[REQUEST] ReviewApi[getReviewListApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] ReviewApi[getReviewListApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function reviewAddOrganizeApi(getData) {
    let returnData = reviewDO;
    try {
        const res = await request.reviewAddOrganize(getData);
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
            console.warn("[REQUEST] ReviewApi[reviewAddOrganizeApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] ReviewApi[reviewAddOrganizeApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function reviewResendOrganizeApi(getData, projectId) {
    let returnData = reviewDO;
    try {
        const res = await request.reviewResendOrganize(getData, projectId);
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
            console.warn("[REQUEST] ReviewApi[reviewResendOrganizeApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] ReviewApi[reviewResendOrganizeApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function reviewGetConsoleCheck(id, type) {
    let returnData = reviewCheckConsoleDO;
    try {
        const res = await request.reviewGetConsoleCheck(id, type);
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
            console.warn("[REQUEST] ReviewApi[reviewGetConsoleCheck]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] ReviewApi[reviewGetConsoleCheck]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function reviewCheckOrganizeApi(getData, id) {
    let returnData = reviewCheckConsoleDO;
    try {
        const res = await request.reviewCheckOrganize(getData, id);
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
            console.warn("[REQUEST] ReviewApi[reviewCheckOrganizeApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] ReviewApi[reviewCheckOrganizeApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function reviewCheckAdminApi(getData, id) {
    let returnData = reviewCheckConsoleDO;
    try {
        const res = await request.reviewCheckOrganize(getData, id);
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
            console.warn("[REQUEST] ReviewApi[reviewCheckAdminApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] ReviewApi[reviewCheckAdminApi]: 请求数据\n', returnData);
    }
    return returnData;
}