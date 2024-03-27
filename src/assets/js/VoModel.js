export let ReviewCheckVO = {
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
export let roleListVO = {
    type: 'all',
    search: '',
    limit: '',
    page: '',
    order: 'asc',
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

/**
 * 删除角色
 * @type {{password: string, code: string, phone: string, email: string, username: string, realname: string}}
 */
export let roleDeleteVO = {
    uuid: '',
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
