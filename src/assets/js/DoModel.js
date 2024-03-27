export let baseResponse = {
    output: '',
    code: 0,
    message: ''
}

export let getUserProfileVO = {
    getBaseResponseDO: baseResponse,
    data: {
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
    getBaseResponseDO: baseResponse,
    data: {
        uuid: '',
        name: '',
        displayName: '',
        permission: []
    }
}

export let permissionDO = {
    getBaseResponseDO: baseResponse,
    data: [
        {
            name: '',
            description: ''
        }
    ]
}

export let getVerifyInfoDO = {
    getBaseResponseDO: baseResponse,
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
    getBaseResponseDO: baseResponse,
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
    getBaseResponseDO: baseResponse,
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
    getBaseResponseDO: baseResponse,
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
    getBaseResponseDO: baseResponse,
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
 * @type {{baseResponse: {output: string, code: number, message: string}, userChangePassword: {realName: string, createdAt: string, phone: string, nickName: string, userName: string, uuid: string, email: string, updatedAt: string}}}
 */
export let userDeleteDO = {
    getBaseResponseDO: baseResponse,
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
    getBaseResponseDO: baseResponse,
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
    getBaseResponseDO: baseResponse,
    data: {}
}

/**
 * 获取角色列表
 */

export let roleListDO = {
    getBaseResponseDO: baseResponse,
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
    getBaseResponseDO: baseResponse,
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
    getBaseResponseDO: baseResponse,
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
    getBaseResponseDO: baseResponse,
    data: {
        name: '',
        displayName: '',
        permission: []
    }
}