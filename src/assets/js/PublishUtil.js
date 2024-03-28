import {message} from "ant-design-vue";
import router from "@/router/index.js";

export async function publicErrorOperate(err) {
    switch (err.response.data.output) {
        case "RequestBodyError":
            message.warn(err.response.data.data[0]);
            return true;
        case "TokenVerifyError":
            message.warn(err.response.data.data.errorMessage);
            setTimeout(_ => {
                router.replace({ name: 'LoginAccount' });
            }, 500);
            break;
    }
    return false;
}
