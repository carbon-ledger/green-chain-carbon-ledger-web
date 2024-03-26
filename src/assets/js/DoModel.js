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

export let permissionDO = {
    getBaseResponseDO,
    data: [
        {
            name: '',
            description: ''
        }
    ]
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

/**
 * 获取用户列表
 */
export let getUserListDO = {
    getBaseResponseDO,
    data: [
        {
            uid: 0,
            uuid: '',
            username: '',
            nickname: '',
            realname: '',
            email: '',
            avatar: '',
            role: '',
            createAt: '',
            updateAt: '',
            ban: false,
            invite: '',
            deletedAt: ''
        }
    ]
}

/**
 * 添加账户
 */
export let userAddDO = {
    getBaseResponseDO,
    data: {
        name: '',
        displayName: '',
        permission: '',
    }
}

/**
 * 修改账户
 *
 */
export let userEditDO = {
    getBaseResponseDO,
    data: {
        uuid: '',
        userName: '',
        nickName: '',
        realName: '',
        email: '',
        phone: '',
        createdAt: '',
        updatedAt: '',
    }
}

/**
 * 注销账户
 * @type {{getBaseResponseDO: {output: string, code: number, message: string}, data: {realName: string, createdAt: string, phone: string, nickName: string, userName: string, uuid: string, email: string, updatedAt: string}}}
 */
export let userDeleteDO = {
    getBaseResponseDO,
    data: {
        uuid: '',
        userName: '',
        nickName: '',
        realName: '',
        email: '',
        phone: '',
        createdAt: '',
        updatedAt: '',
    }
}

/**
 * 封禁账户
 */
export let userBanDO = {
    getBaseResponseDO,
    data: {
        uuid: '',
        userName: '',
        nickName: '',
        realName: '',
        email: '',
        phone: '',
        createdAt: '',
        updatedAt: ''
    }
}

/**
 * 账户密码重置
 */
export let userResetDO = {
    getBaseResponseDO,
    data: {}
}

/**
 * 获取角色列表
 */

export let roleListDO = {
    getBaseResponseDO,
    data: [
        {
            uuid: '',
            name: '',
            displayName: '',
            permission: [],
        }
    ]
}

/**
 * 修改角色
 */
export let roleEditDO = {
    getBaseResponseDO,
    data: {
        uuid: '',
        name: '',
        displayName: '',
        permission: []
    }
}

/**
 * 新增角色
 */
export let roleAddDO = {
    getBaseResponseDO,
    data: {
        name: '',
        displayName: '',
        permission: []
    }
}

/**
 * 删除角色
 */
export let roleDeleteDO = {
    getBaseResponseDO,
    data: {
        name: '',
        displayName: '',
        permission: []
    }
}