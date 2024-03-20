export let getUserProfileVO = {
    user: {
        uuid: '',
        userName: '',
        realName: '',
        email: '',
        phone: ''
    },
    role: '',
    permission: {
        rolePermission: [],
        userPermission: []
    }
}

export let getLoginInfoVO = [
    {
        userIp: '',
        deviceType: '',
        browserType: '',
        loginTime: '',
        expireTime: ''
    }
]

export let getRoleCurrentVO = {
    uuid: '',
    name: '',
    displayName: '',
    permission: []
}

export let permissionVO = {
    name: '',
    description: ''
}

