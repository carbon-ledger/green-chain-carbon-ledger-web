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

export let getVerifyInfoDO = {
    id: 0,
    accountUuid: '',
    type: 0,
    organizeName: '',
    organizeLicenseUrl: '',
    organizeCreditCode: '',
    organizeRegisteredCapital: '',
    organizeEstablishmentDate: '',
    legalRepresentativeName: '',
    legalRepresentativeId: '',
    legalIdCardFrontUrl: '',
    legalIdCardBackUrl: '',
    certificationStatus: 0,
    applyTime: '',
    approveTime: '',
    updatedAt: '',
    remarks: '',
    approveUuid: '',
    approveRemarks: ''
}

