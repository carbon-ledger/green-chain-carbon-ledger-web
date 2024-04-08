export let reviewCheckVO = {
    remark: '',
    allow: false
}

export let UserVerifyVO = {
    organizeName: '',
    creditCode: '',
    license: '',
    registeredCapital: '',
    establishmentDate: '',
    legalRepresentativeName: '',
    legalRepresentativeId: '',
    legalIdCardFront: '',
    legalIdCardBack: '',
    remark: ''
}

/**
 * 获取账户列表
 */
export let userListVO = {
    type: '',
    search: '',
    limit: '',
    page: '',
    order: '',
}


/**
 * 添加账户
 */
export let userAddVO = {
    username: '',
    realname: '',
    phone: '',
    email: '',
    role: '',
}

/**
 * 修改账户
 */
export let userManageEditVO = {
    userName: '',
    nickName: '',
    realName: '',
    avatar: '',
    email: '',
    phone: '',
    uuid: ''
}

/**
 * 注销账户
 */
export let userDeleteForceVO = {
    uuid: '',
}

/**
 * 封禁账户
 */
export let userBanVO = {
    uuid: '',
}

/**
 * 账户密码重置
 */
export let userResetVO = {
    uuid: '',
}

/**
 * 获取角色列表
 * @type {{search: string, limit: string, page: string, type: string, order: string}}
 */
export let searchAllVO = {
    type: 'all',
    search: '',
    limit: '',
    page: '',
    order: 'desc',
}

/**
 * 添加角色
 */
export let roleAddVO = {
    name: '',
    displayName: '',
    permission: [],
}

/**
 * 修改角色
 */
export let roleEditVO = {
    uuid: '',
    name: '',
    displayName: '',
    permission: [],
}

export let managerUserRegisterVO = {
    username: '',
    realname: '',
    phone: '',
    email: '',
    code: '',
    password: '',
}

export let userChangePasswordVO = {
    currentPassword: '',
    newPassword: '',
    newPasswordConfirm: ''
}

export let userLoginVO = {
    user: '',
    password: ''
}

export let sendMailVO = {
    email: '',
    template: ''
}

export let userDeleteVO = {
    password: '',
    code: '',
}

export let sendTradeSellVO = {
    amount: 0.000,
    unit: 0.000,
    text: '',
    draft: true
}

/**
 * 创建组织今年的配额
 *
 * @type {{quota: number, status: boolean}}
 */
export let sendCreateOrganizeQuotaVO = {
    quota: 0.000,
    status: true
}

/**
 * 创建组织账单
 *
 * @type {{electricExport: string, summary: string, electricCompany: string, electricBuy: string, materials: string, electricOutside: string, startTime: string, endTime: string, type: string, title: string, send: boolean}}
 */
export let sendAccountingVO = {
    type: '请选择类型',
    startTime: undefined,
    endTime: undefined,
    title: undefined,
    materials: undefined,
    electricBuy: 0.00,
    electricOutside: 0.00,
    electricExport: 0.00,
    electricCompany: undefined,
    summary: undefined,
    send: true
}

export let materialAreaVO = [
    {
        name: undefined,
        material: {
            buy: 0.0,
            openingInv: 0.0,
            endingInv: 0.0,
            outside: 0.0,
            export: 0.0
        }
    }
]

export let courseAreaVO = [
    {
        name: undefined,
        material: {
            buy: 0.0,
            openingInv: 0.0,
            endingInv: 0.0,
            outside: 0.0,
            export: 0.0
        }
    }
]

export let carbonSequestrationAreaVO = [
    {
        name: undefined,
        material: {
            openingInv: 0.0,
            endingInv: 0.0,
            export: 0.0
        }
    }
]

export let desulfurizationAreaVO = [
    {
        name: undefined,
        material: {
            consumption: 0.00
        }
    }
]

export let heatAreaVO = {
    buy: 0.00,
    outside: 0.00,
    export: 0.00
}
