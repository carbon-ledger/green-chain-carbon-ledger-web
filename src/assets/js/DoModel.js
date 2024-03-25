export let getBaseResponseDO = {
    output: '',
    code: 0,
    message: ''
}

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
    getBaseResponseDO,
    data: {
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
        certificationStatus: -1,
        applyTime: '',
        approveTime: '',
        updatedAt: '',
        remarks: '',
        approveUuid: '',
        approveRemarks: ''
    }
}

export let getVerifyListDO = {
    id: 0,
    type: false,
    account: {
        userName: '',
        email: ''
    },
    organizeName: '',
    legalRepresentativeName: '',
    applyTime: ''
}

export let reviewGetOrganizeDO = {
    getBaseResponseDO,
    data: {
        account: {
            uuid: '',
            userName: '',
            realName: '',
            email: ''
        },
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
        applyTime: '',
        remarks: ''
    }
}
