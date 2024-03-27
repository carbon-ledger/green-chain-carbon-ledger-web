import {permissionDO} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";

export async function getPermissionListApi() {
    let returnData = permissionDO;
    try {
        const res = await request.getPermissionList();
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            switch (err.response.data.output) {
                case "TokenVerifyError":
                    message.warn(err.response.data.data.errorMessage);
                    break;
                default:
                    returnData = err.response.data;
                    message.warn(err.response.data.message);
            }
        } else {
            // 处理无法访问err.response的情况
            message.warn("[REQUEST] PermissionApi[getPermissionListApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] PermissionApi[getPermissionListApi]: 请求数据', returnData);
    }
    return returnData;
}