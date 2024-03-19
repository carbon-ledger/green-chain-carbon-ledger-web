import {reactive} from "vue";

export function getUserProfileVO(getData) {
    return reactive({
        user: {
            uuid: getData.data.user.uuid,
            userName: getData.data.user.userName,
            realName: getData.data.user.realName,
            email: getData.data.user.email,
            phone: getData.data.phone
        },
        role: getData.data.role,
        permission: {
            rolePermission: getData.data.permission.rolePermission,
            userPermission: getData.data.permission.userPermission
        }
    })
}