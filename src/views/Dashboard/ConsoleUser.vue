<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="账户管理"
  >
    <template #extra>
      <!--头部-->
      <div class="flex w-full justify-end">
        <a-input v-model:value="getUserListVO.search" class="h-8 border-gray-300 rounded-md"
                 placeholder="输入账户信息"/>
        <a-button class="ml-4 mr-4 flex justify-center items-center">
          <SearchOutlined/>
          查询
        </a-button>
        <a-button class="bg-aspargus flex justify-center items-center" type="primary" @click="showAddDiaLog">
          <PlusOutlined/>
          新增账户
        </a-button>
      </div>
    </template>
    <a-descriptions-item>
      <div class="text-mount-pink">
        账户管理，包括账户的增删改查，账户的状态，账户的创建时间，账户的更新时间，账户是否已被删除等。
      </div>
    </a-descriptions-item>
    <a-radio-group :value="getUserListVO.type" button-style="solid" class="mt-6">
      <a-radio-button value="all" @click="getUserType('all')">全部</a-radio-button>
      <a-radio-button value="available" @click="getUserType('available')">可用</a-radio-button>
      <a-radio-button value="banlist" @click="getUserType('banlist')">封禁</a-radio-button>
      <a-radio-button value="unbanlist" @click="getUserType('unbanlist')">未封禁</a-radio-button>
    </a-radio-group>
  </a-page-header>
  <div class="px-3">
    <!--表格内容-->
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns" :data-source="getUser.data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key==='username'">
            {{ record.username }}
          </template>
          <template v-else-if="column.key==='realname'">
            {{ record.realname }}
          </template>
          <template v-else-if="column.key==='email'">
            {{ record.email }}
          </template>
          <template v-else-if="column.key==='role'">
            {{ getRoleName(record.role) }}
          </template>
          <template v-else-if="column.key === 'state'">
            <a-tag v-if="record.ban === true" color="error">
              封禁
            </a-tag>
            <a-tag v-if="record.deletedAt !== null" color="volcano">
              注销
            </a-tag>
            <a-tag v-if="record.ban === false && record.deletedAt === null" color="success">
              正常
            </a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <span v-if="record.deletedAt === null" class="flex">
              <a-button class="text-aspargus flex justify-center items-center" size="small"
                        type="text" @click="showDialogWithEditUser(record)">
                <EditOutlined/>
                修改
              </a-button>
              <a-button v-if="record.username !== 'console_user'" class="text-aspargus flex justify-center items-center"
                        size="small" type="text"
                        @click="showDialogWithDeleteUser(record)">
                <DeleteOutlined/>
                注销
              </a-button>
              <a-button v-else class="text-aspargus flex justify-center items-center"
                        disabled size="small" type="text">
                <DeleteOutlined/>
                注销
              </a-button>
              <a-button v-if="record.username !== 'console_user'" class="text-aspargus flex justify-center items-center" size="small"
                        type="text" @click="showDialogWithResetUser(record)">
                <UndoOutlined/>
                重置密码
              </a-button>
              <a-button v-else class="text-aspargus flex justify-center items-center" size="small"
                        type="text" disabled>
                <UndoOutlined/>
                重置密码
              </a-button>
            </span>
            <span v-else class="flex">
              <a-button class="text-mount-pink flex justify-center items-center" disabled
                        size="small" type="text">
                <EditOutlined/>
                修改
              </a-button>
              <a-button class="text-mount-pink flex justify-center items-center" disabled
                        size="small" type="text">
                <DeleteOutlined/>
                注销
              </a-button>
              <a-button class="text-aspargus flex justify-center items-center" disabled
                        size="small" type="text">
                <UndoOutlined/>
                重置密码
              </a-button>
            </span>
          </template>
        </template>
      </a-table>
    </div>

    <!--新增账户对话框-->
    <a-modal v-model:open="addUserDialog" title="新增账户" width="450px">
      <a-form
          :label-col="{ span: 5 }"
          class="p-4 flex-col justify-center"
      >
        <a-form-item
            :rules="[{ required: true }]"
            label="账户名"
        >
          <a-input v-model:value="addUserAddVO.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="真实姓名"
        >
          <a-input v-model:value="addUserAddVO.realname">
            <template #prefix>
              <IdcardOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="手机号"
        >
          <a-input v-model:value="addUserAddVO.phone">
            <template #prefix>
              <PhoneOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="邮箱"
        >
          <a-input v-model:value="addUserAddVO.email">
            <template #prefix>
              <MailOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="角色"
        >
          <a-select
              ref="select"
              v-model:value="addUserAddVO.role"
              style="width: 293px"
              @focus="focus"
          >
            <a-select-option v-for="(getRole, index) in getRoleList.data" :key="getRoleList.data[index].name"
                             :value="getRoleList.name">
              <span>{{ getRole.name }}</span> - <span class="text-gray-400">{{ getRole.displayName }}</span>
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
      <template #footer>
        <a-button @click="closeDialogAddUser()">取消</a-button>
        <a-button class="bg-aspargus mt-4" type="primary" @click="consoleAddUser()">确认</a-button>
      </template>
    </a-modal>

    <!--管理员修改账户对话框-->
    <a-modal v-model:open="editUserDialog" title="修改账户"
             width="550px">
      <a-form
          :label-col="{ span: 9}"
          class="p-4 flex-col justify-center"
      >
        <div class="flex space-x-10">
          <div class="flex-col">
            <a-form-item
                :rules="[{ required: true }]"
                label="账户名"
            >
              <a-input v-model:value="getUserManageEditVO.userName">
                <template #prefix>
                  <UserOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
                label="昵称"
            >
              <a-input v-model:value="getUserManageEditVO.nickName">
                <template #prefix>
                  <AuditOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
                :rules="[{ required: true }]"
                label="真实信息"
            >
              <a-input v-model:value="getUserManageEditVO.realName">
                <template #prefix>
                  <MailOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
                :rules="[{ required: true }]"
                label="邮箱"
            >
              <a-input v-model:value="getUserManageEditVO.email">
                <template #prefix>
                  <MailOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
                label="手机号"
            >
              <a-input v-model:value="getUserManageEditVO.phone">
                <template #prefix>
                  <PhoneOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
            </a-form-item>
          </div>
          <div>
            <a-form-item>
              <a-upload v-model:value="getUserManageEditVO.avatar" action="/upload.do" list-type="picture-card">
                <div>
                  <PlusOutlined/>
                  <div style="margin-top: 8px">头像</div>
                </div>
              </a-upload>
            </a-form-item>
          </div>
        </div>
      </a-form>
      <template #footer>
        <a-button danger type="dashed" @click="showDialogWithBanUser()">封禁</a-button>
        <a-button @click="closeDialogManagerEditUser">取消</a-button>
        <a-button class="bg-aspargus mt-4" type="primary" @click="consoleEditUser()">确认</a-button>
      </template>
    </a-modal>

    <!--管理员注销账户对话框-->
    <a-modal v-model:open="deleteUserDialog" title="注销账户" width="450px">
      <p>
        <ExclamationCircleOutlined class="text-yellow-300 font-extrabold text-xl mr-2"/>
        确认要注销该账户吗？
      </p>
      <template #footer>
        <a-button class="mt-4" danger @click="consoleDeleteUser()">确认</a-button>
        <a-button @click="closeDialogDeleteUser">取消</a-button>
      </template>
    </a-modal>

    <!--封禁账户对话框-->
    <a-modal v-model:open="banUserDialog" title="封禁账户" width="450px">
      <p>确认要封禁该账户吗？</p>
      <template #footer>
        <a-button class="mt-4" danger @click="consoleBanUser()">确认</a-button>
        <a-button @click="closeDialogBanUser">取消</a-button>
      </template>
    </a-modal>

    <!--管理员重置密码对话框-->
    <a-modal v-model:open="resetUserPasswordDialog" title="重置密码" width="450px">
      <p>
        <ExclamationCircleOutlined class="text-yellow-300 font-extrabold text-xl mr-2"/>
        确认要重置密码吗？
      </p>
      <template #footer>
        <a-button class="mt-4" danger @click="consoleResetUser">确认</a-button>
        <a-button @click="closeDialogResetUser">取消</a-button>
      </template>
    </a-modal>
  </div>
  <contextHolder/>
</template>

<script setup>
import {
  AuditOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  IdcardOutlined,
  MailOutlined,
  PhoneOutlined,
  PlusOutlined,
  SearchOutlined,
  UndoOutlined,
  UserOutlined
} from "@ant-design/icons-vue";
import {onMounted, reactive, ref} from 'vue';
import {
  searchAllVO,
  userAddVO,
  userBanVO,
  userDeleteForceVO,
  userListVO,
  userManageEditVO,
  userResetVO
} from "@/assets/js/VoModel.js"
import {
  getUserListApi,
  userAddConsoleApi,
  userBanApi,
  userForceDeleteApi,
  userForceEditApi,
  userResetPasswordApi
} from "@/api/UserApi.js";
import {roleListDO, singleUserDO, userListDO} from "@/assets/js/DoModel.js";
import {getRoleListApi} from "@/api/RoleApi.js";
import {message, notification} from 'ant-design-vue';

const [api, contextHolder] = notification.useNotification();

const getUserListVO = reactive(userListVO);
const addUserAddVO = reactive(userAddVO);
const getUserManageEditVO = reactive(userManageEditVO);
const getUserBanVO = reactive(userBanVO);
const getUserDeleteVO = reactive(userDeleteForceVO);
const getUserResetVO = reactive(userResetVO);
const getRoleVO = reactive(searchAllVO);
const getSingleUser = ref(singleUserDO);
const getUser = ref(userListDO);
const getRoleList = ref(roleListDO);

onMounted(async _ => {
  getUser.value = await getUserListApi('all', getUserListVO);
  getRoleList.value = await getRoleListApi('all', getRoleVO);
})

// Dialog相关
const addUserDialog = ref(false);
const editUserDialog = ref(false);
const banUserDialog = ref(false);
const resetUserPasswordDialog = ref(false);
const deleteUserDialog = ref(false);


// 处理 Dialog
/**
 * 添加用户模态框
 */
function showAddDiaLog() {
  addUserDialog.value = true;
}

/**
 * 编辑用户模态框
 *
 * @param record 映射用户信息
 */
function showDialogWithEditUser(record) {
  editUserDialog.value = true;
  getSingleUser.value = record
  getUserManageEditVO.userName = record.username;
  getUserManageEditVO.realName = record.realname;
  getUserManageEditVO.email = record.email;
  getUserManageEditVO.uuid = record.uuid;
}

/**
 * 强制注销用户模态框
 *
 * @param record 映射用户信息
 */
function showDialogWithDeleteUser(record) {
  deleteUserDialog.value = true;
  getUserDeleteVO.uuid = record.uuid;
}


/**
 * 封禁用户模态框
 */
function showDialogWithBanUser() {
  banUserDialog.value = true;
  getUserBanVO.uuid = getSingleUser.value.uuid;
}

/**
 * 重制密码模态框
 *
 * @param record
 */
function showDialogWithResetUser(record) {
  resetUserPasswordDialog.value = true;
  getUserResetVO.uuid = record.uuid;
}

const closeDialogResetUser = () => resetUserPasswordDialog.value = false;
const closeDialogDeleteUser = () => deleteUserDialog.value = false;
const closeDialogBanUser = () => banUserDialog.value = false;
const closeDialogManagerEditUser = () => editUserDialog.value = false;
const closeDialogAddUser = () => addUserDialog.value = false;

const openNotification = (placement, record) => {
  api.info({
    message: '密码更新成功',
    description:
        `用户 ${record.userName} 的新密码为 ${record.newPassword}`,
    placement,
  });
};

/**
 * 添加用户接口
 */
async function consoleAddUser() {
  const getReturnData = await userAddConsoleApi(addUserAddVO)
  if (getReturnData.output === "Success") {
    addUserDialog.value = false;
    message.success("用户创建成功");
    getUser.value = await getUserListApi('all', getUserListVO);
  }
}

/**
 * 编辑用户接口
 */
async function consoleEditUser() {
  const getReturnData = await userForceEditApi(getUserManageEditVO)
  if (getReturnData.output === "Success") {
    editUserDialog.value = false;
    getUser.value = await getUserListApi('all', getUserListVO);
  }
}

/**
 * 注销用户接口
 */
async function consoleDeleteUser() {
  const getReturnData = await userForceDeleteApi(getUserDeleteVO.uuid)
  if (getReturnData.output === "Success") {
    deleteUserDialog.value = false
    getUser.value = await getUserListApi('all', getUserListVO);
  }
}

/**
 * 封禁用户接口
 */
async function consoleBanUser() {
  const getReturnData = await userBanApi(getUserBanVO.uuid)
  if (getReturnData.output === "Success") {
    banUserDialog.value = false;
    editUserDialog.value = false;
    message.info("操作成功")
    getUser.value = await getUserListApi('all', getUserListVO);
  }
}

/**
 * 重制用户密码接口
 */
async function consoleResetUser() {
  const getReturnData = await userResetPasswordApi(getUserResetVO.uuid)
  if (getReturnData.output === "Success") {
    resetUserPasswordDialog.value = false;
    openNotification('topRight', getReturnData.data);
    getUser.value = await getUserListApi('all', getUserListVO);
  }
}

/**
 * 获取角色名称
 *
 * @param role
 * @return {*}
 */
function getRoleName(role) {
  let getName;
  getRoleList.value.data.forEach(it => {
    if (it.uuid === role) {
      getName = it.displayName;
    }
  })
  return getName;
}

/**
 * 动态更新数据
 *
 * @param type
 * @return {Ref<UnwrapRef<{data: [{role: string, updateAt: string, avatar: string, uuid: string, createAt: string, ban: boolean, realname: string, uid: number, deletedAt: string, nickname: string, invite: string, email: string, username: string}], baseResponse: {output: string, code: number, message: string}}>>}
 */
const getUserType = async (type) => getUser.value = await getUserListApi(type, getUserListVO);
</script>

<script>
import {breadcrumbs} from "@/utils/DashboardBreadCrumb.js";

breadcrumbs.push({breadcrumbName: '网站管理'});
breadcrumbs.push({path: '/user', breadcrumbName: '账户管理'});
setTimeout(() => {
  breadcrumbs.pop();
  breadcrumbs.pop();
}, 1)
let routes = breadcrumbs;

//表格栏目
const columns = [
  {
    title: '账户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '真实信息',
    dataIndex: 'realname',
    key: 'realname',
  },
  {
    title: '角色组',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '邮箱',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  },
];
</script>