import {message} from "ant-design-vue";
import router from "@/router/index.js";

export async function publicErrorOperate(err) {
    switch (err.response.data.output) {
        case "RequestBodyError":
            message.warn(err.response.data.data[0]);
            return true;
        case "NoPermissionError":
            await router.replace({name: 'PageNotFounded', replace: true});
            break;
        case "TokenVerifyError":
            message.warn(err.response.data.data.errorMessage);
            await router.replace({name: 'LoginAccount', replace: true});
            break;
        case "ServerInternalError":
            message.error("服务器内部错误，详情请询问管理员，错误 ID 「" + err.response.data.code +"」");
    }
    return false;
}
