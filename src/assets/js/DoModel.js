export let baseResponse = {
    output: '',
    code: 0,
    message: ''
}

export let userLoginDO = {
    baseResponse,
    data: {
        user: {
            uuid: '',
            userName: '',
            realName: '',
            email: '',
            phone: ''
        },
        role: {
            name: '',
            displayName: ''
        },
        token: '',
        permission: {
            rolePermission: [],
            userPermission: []
        },
        recover: false
    }
}

export let userCurrentDO = {
    baseResponse,
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
    baseResponse,
    data: {
        uuid: '',
        name: '',
        displayName: '',
        permission: []
    }
}

export let permissionDO = {
    baseResponse,
    data: [
        {
            name: '',
            description: ''
        }
    ]
}

export let getVerifyInfoDO = {
    baseResponse,
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
    baseResponse,
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
    baseResponse,
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
    baseResponse,
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
    baseResponse,
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
    baseResponse,
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
    baseResponse,
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
    baseResponse,
    data: {}
}

/**
 * 获取角色列表
 */

export let roleListDO = {
    baseResponse,
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
    baseResponse,
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
    baseResponse,
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
    baseResponse,
    data: {
        name: '',
        displayName: '',
        permission: []
    }
}

export let userLoginInfoDO = {
    baseResponse,
    data: [
        {
            userIp: '',
            deviceType: '',
            browserType: '',
            loginTime: '',
            expireTime: ''
        }
    ]
}