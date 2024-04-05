import {baseResponse, tradeBuyOneDO, tradeDO} from "@/models/DoModel.js";
import request from "@/models/Request.js";
import {publicErrorOperate} from "@/utils/PublishUtil.js";
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

export async function tradeSendApi(getData) {
    let returnData = tradeDO;
    try {
        const res = await request.tradeSend(getData);
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
            console.warn("[REQUEST] TradeApi[tradeSendApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] TradeApi[tradeSendApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function tradeReviewApi() {
    let returnData = tradeDO;
    try {
        const res = await request.tradeReview();
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
            console.warn("[REQUEST] TradeApi[tradeReviewApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] TradeApi[tradeReviewApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function tradeReviewPassApi(getData) {
    let returnData = baseResponse;
    try {
        const res = await request.tradeReviewPass(getData);
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
            console.warn("[REQUEST] TradeApi[tradeReviewPassApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] TradeApi[tradeReviewPassApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function tradeListApi(getData) {
    let returnData = tradeDO;
    try {
        const res = await request.tradeList(getData);
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
            console.warn("[REQUEST] TradeApi[tradeListApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] TradeApi[tradeListAPi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function tradeBuyApi(getData) {
    let returnData = baseResponse;
    try {
        const res = await request.tradeBuy(getData);
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
            console.warn("[REQUEST] TradeApi[tradeBuyApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] TradeApi[tradeBuyApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getTradeBankApi(tradeId) {
    let returnData = tradeBuyOneDO;
    try {
        const res = await request.getTradeBank(tradeId);
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
            console.warn("[REQUEST] TradeApi[getTradeBankApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] TradeApi[getTradeBankApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function getMyBuyTradeApi() {
    let returnData = tradeDO;
    try {
        const res = await request.getMyBuyTrade();
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
            console.warn("[REQUEST] TradeApi[getMyBuyTradeApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] TradeApi[getMyBuyTradeApi]: 请求数据\n', returnData);
    }
    return returnData;
}