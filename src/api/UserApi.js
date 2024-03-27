import {userCurrentDO} from "@/assets/js/DoModel.js";
import request from "@/assets/js/Request.js";
import router from "@/router/index.js";

export async function getUserCurrentApi() {
    let returnData = userCurrentDO;
    try {
        const res = await request.getUserCurrent();
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            returnData = err.response.data;
            await router.replace({name: 'LoginAccount', replace: true});
        } else {
            // 处理无法访问err.response的情况
            console.warn("[REQUEST] UserApi[getUserCurrentApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] UserApi[getUserCurrentApi]: 请求数据\n', returnData);
    }
    return returnData
}