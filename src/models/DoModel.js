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
            avatar: '',
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

export let permissionListDO = {
    baseResponse,
    data: [
        {
            name: '',
            description: ''
        }
    ]
}

export let organizeReviewDO = {
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

export let reviewListDO = {
    baseResponse,
    data: [
        {
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
    ]
}

export let reviewDO = {
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
        certificationStatus: 0,
        applyTime: '',
        approveTime: '',
        updatedAt: '',
        remarks: '',
        approveUuid: '',
        approveRemarks: ''
    }
}

export let reviewCheckConsoleDO = {
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
        organizeRegisteredCapital: 0.00,
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
export let userListDO = {
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

export let singleUserDO = {
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
export let userForceEditDO = {
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

export let userForceDeleteDO = {
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

export let userRegisterDO = {
    baseResponse,
    data: {
        uuid: '',
        userName: '',
        realName: '',
        email: '',
        phone: ''
    }
}

export let resetPasswordDO = {
    baseResponse,
    data: {
        uuid: '',
        userName: '',
        realName: '',
        email: '',
        phone: '',
        newPassword: '',
        createdAt: ''
    }
}

export let emissionsQuotaDO = {
    baseResponse,
    data: [
        {
            uuid: '',
            organizeUuid: '',
            quotaYear: 0,
            totalQuota: 0.0,
            allocatedQuota: 0.0,
            usedQuota: 0.0,
            allocationDate: '',
            complianceStatus: false,
            auditLog: [
                {
                    date: '',
                    log: '',
                    operate: ''
                }
            ],
            createdAt: '',
            updatedAt: ''
        }
    ]
}

export let carbonOperateListDO = {
    baseResponse,
    data: [
        {
            uuid: '',
            userName: '',
            realName: '',
            email: '',
            phone: '',
            createdAt: '',
            updatedAt: ''
        }
    ]
}

export let tradeDO = {
    baseResponse,
    data: [
        {
            organize: {
                uuid: '',
                userName: '',
                realName: '',
                email: '',
                phone: '',
                createdAt: ''
            },
            tradeId: 0,
            quotaAmount: 0.0,
            pricePerUnit: 0.0,
            description: '',
            buyOrganization: '',
            status: ''
        }
    ]
}

export let tradeBuyOneDO = {
    baseResponse,
    data: {
        organize: {
            uuid: '',
            userName: '',
            realName: '',
            email: '',
            phone: '',
            createdAt: ''
        },
        accountOpen: {
            accountBank: '',
            accountNumber: ''
        }
    }
}

export let getTypeDO = {
    baseResponse,
    data: [
        {
            name: undefined,
            displayName: undefined
        }
    ]
}

export let getCarbonReportDO = {
    baseResponse,
    data: [
        {
            id: 0,
            organizeUuid: '',
            accountingPeriod: '',
            totalEmission: 0.00,
            reportStatus: '',
            listOfReports: [''],
            createdAt: '',
            updatedAt: ''
        }
    ]
}

export let getCarbonReportSingleDO = {
    baseResponse,
    data: {
        id: 0,
        organizeUuid: '',
        reportTitle: '',
        reportType: '',
        accountingPeriod: '',
        totalEmission: 0.00,
        reportStatus: '',
        verifierUuid: '',
        verificationDate: '',
        reportSummary: '',
        listOfReports: '',
        createdAt: '',
        updatedAt: ''
    }
}

export let getCarbonAccountingSingleDO = {
    baseResponse,
    data: {
        id: 0,
        organizeUuid: '',
        reportId: 0,
        emissionType: '',
        emissionVolume: '',
        emissionAmount: 0.00,
        accountingPeriod: '',
        dataVerificationStatus: '',
        verifierUuid: '',
        verificationNotes: '',
        createdAt: '',
        updatedAt: ''
    }
}