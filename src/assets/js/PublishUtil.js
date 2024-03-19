/**
 *
 */
export let returnMessageString= (getData) => {
    switch (getData.output) {
        case "Success": return "操作成功";
        case "": return;
        default: return getData.output.message;
    }
}