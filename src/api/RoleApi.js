import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";
import {baseResponse, getRoleCurrentVO, roleEditDO, roleListDO} from "@/assets/js/DoModel.js";
import {publicErrorOperate} from "@/assets/js/PublishUtil.js";

/**
 * 获取角色列表
 */
export async function getRoleListApi(type, data) {
    let returnData = roleListDO;
    data.type = type;
    try {
        const res = await request.getRoleList(data);
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
            console.warn("[REQUEST] RoleApi[getRoleListApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] RoleApi[getRoleListApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function roleCurrentApi() {
    let returnData = getRoleCurrentVO;
    try {
        const res = await request.getRoleCurrent();
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
            console.warn("[REQUEST] RoleApi[roleCurrentApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] RoleApi[roleCurrentApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function roleAddApi(getData) {
    let returnData = baseResponse;
    try {
        const res = await request.roleAdd(getData);
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
            console.warn("[REQUEST] RoleApi[roleAddApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] RoleApi[roleAddApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function roleEditApi(getData) {
    let returnData = roleEditDO;
    try {
        const res = await request.roleEdit(getData.uuid, getData);
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
            console.warn("[REQUEST] RoleApi[roleEditApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] RoleApi[roleEditApi]: 请求数据\n', returnData);
    }
    return returnData;
}

export async function roleDeleteApi(getData) {
    let returnData = baseResponse;
    try {
        const res = await request.roleDelete(getData);
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
            console.warn("[REQUEST] RoleApi[roleDeleteApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] RoleApi[roleDeleteApi]: 请求数据\n', returnData);
    }
    return returnData;
}

