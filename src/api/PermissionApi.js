import {permissionListDO} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";
import {publicErrorOperate} from "@/assets/js/PublishUtil.js";

export async function getPermissionListApi() {
    let returnData = permissionListDO;
    try {
        const res = await request.getPermissionList();
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
            console.warn("[REQUEST] PermissionApi[getPermissionListApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] PermissionApi[getPermissionListApi]: 请求数据\n', returnData);
    }
    return returnData;
}