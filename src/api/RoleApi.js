import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";
import {getRoleCurrentVO, roleListDO} from "@/assets/js/DoModel.js";

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
            switch (err.response.data.output) {
                default:
                    returnData = err.response.data;
                    message.warn(err.response.data.message);
            }
        } else {
            // 处理无法访问err.response的情况
            message.warn("[REQUEST] RoleApi[getRoleListApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] RoleApi[getRoleListApi]: 请求数据', returnData);
    }

    return returnData;
}

export async function getRoleCurrentApi() {
    let returnData = getRoleCurrentVO;
    try {
        const res = await request.getRoleCurrent();
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
            message.warn("[REQUEST] RoleApi[getRoleCurrentApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] RoleApi[getRoleCurrentApi]: 请求数据', returnData);
    }

    return returnData;
}

