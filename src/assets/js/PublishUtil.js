import {message} from "ant-design-vue";
import router from "@/router/index.js";

export async function publicErrorOperate(err) {
    switch (err.response.data.output) {
        case "RequestBodyError":
            message.warn(err.response.data.data[0]);
            return true;
        case "NoPermissionError":
            setTimeout(_ => {
                router.replace({ name: 'PageNotFounded' });
            }, 500);
            break;
        case "TokenVerifyError":
            message.warn(err.response.data.data.errorMessage);
            setTimeout(_ => {
                router.replace({ name: 'LoginAccount' });
            }, 500);
            break;
        case "ServerInternalError":
            message.error("服务器内部错误，详情请询问管理员，错误 ID 「" + err.response.data.code +"」");
    }
    return false;
}
