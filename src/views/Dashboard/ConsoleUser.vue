<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="账户管理"
  >
    <template #extra>
      <!--头部-->
      <div class="flex w-full justify-end">
        <a-input v-model:value=" getUserListVO.search" class="h-8 border-gray-300 rounded-md" placeholder="输入账户信息"/>
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
    <a-radio-group :value=" getUserListVO.type" button-style="solid" class="mt-6">
      <a-radio-button value="all" @click="GetAll">全部</a-radio-button>
      <a-radio-button value="available" @click="GetAvailable">可用</a-radio-button>
      <a-radio-button value="banlist" @click="GetBanList">封禁</a-radio-button>
      <a-radio-button value="unbanlist">未封禁</a-radio-button>
    </a-radio-group>
  </a-page-header>
  <div class="px-3">
    <!--表格内容-->
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns" :data-source="dataUser.data" :loading="loading">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key==='uuid'">
            {{ record.uuid }}
          </template>
          <template v-else-if="column.key==='username'">
            {{ record.username }}
          </template>
          <template v-else-if="column.key==='realname'">
            {{ record.realname }}
          </template>
          <template v-else-if="column.key==='email'">
            {{ record.email }}
          </template>
          <template v-else-if="column.key === 'state'">
            <a-tag v-if="record.ban === true" :bordered="false" color="error">
              封禁
            </a-tag>
            <a-tag v-if="record.deletedAt !== null" :bordered="false" color="volcano">
              注销
            </a-tag>
            <a-tag v-if="record.ban === false && record.deletedAt === null" :bordered="false" color="success">
              正常
            </a-tag>
          </template>
          <template v-else-if="column.key==='action'">
            <span class="flex" v-if="record.deletedAt === null">
              <a-button class="text-aspargus flex justify-center items-center" size="small"
                        type="text" @click="showManagerEditDiaLog(record)">
                <EditOutlined/>
                修改
              </a-button>
              <a-button class="text-aspargus flex justify-center items-center" size="small"
                        type="text" @click="showDeleteDiaLog(record)">
                <DeleteOutlined/>
                注销
              </a-button>
              <a-button class="text-aspargus flex justify-center items-center" size="small"
                        type="text" @click="showResetDiaLog(record)">
                <UndoOutlined />
                重置密码
              </a-button>
            </span>
            <span class="flex" v-else>
              <a-button class="text-mount-pink flex justify-center items-center" size="small"
                        type="text" disabled>
                <EditOutlined/>
                修改
              </a-button>
              <a-button class="text-mount-pink flex justify-center items-center" size="small"
                        type="text" disabled>
                <DeleteOutlined/>
                注销
              </a-button>
              <a-button class="text-aspargus flex justify-center items-center" size="small"
                        type="text" disabled>
                <UndoOutlined />
                重置密码
              </a-button>
            </span>
          </template>
        </template>
      </a-table>
    </div>

    <!--新增账户对话框-->
    <a-modal v-model:open="addDiaLog" title="新增账户" width="450px">
      <a-form
          :label-col="{ span: 5}"
          class="p-4 flex-col justify-center"
      >
        <a-form-item
            :rules="[{ required: true }]"
            label="账户名"
        >
          <a-input v-model:value="addUser.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="真实姓名"
        >
          <a-input v-model:value="addUser.realname">
            <template #prefix>
              <IdcardOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="手机号"
        >
          <a-input v-model:value="addUser.phone">
            <template #prefix>
              <PhoneOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="邮箱"
        >
          <a-input v-model:value="addUser.email">
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
              v-model:value="addUser.role"
              style="width: 293px"
              @focus="focus"
          >
            <a-select-option v-for="(dataRole, index) in dataRole.data" :key="index" :value="dataRole.name">
             <span>{{dataRole.name}}</span> - <span class="text-gray-400">{{dataRole.displayName}}</span>
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
      <template #footer>
        <a-button @click="CancelAddUser">取消</a-button>
        <a-button class="bg-aspargus mt-4" type="primary" @click="okAddUser()">确认</a-button>
      </template>
    </a-modal>

    <!--管理员修改账户对话框-->
    <a-modal v-model:open="manager_editDiaLog" title="修改账户"
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
        <a-button type="dashed" danger @click="showBanDiaLog(record)">封禁</a-button>
        <a-button @click="CancelManagerEditUser">取消</a-button>
        <a-button class="bg-aspargus mt-4" type="primary" @click="OkManagerEditUser()">确认</a-button>
      </template>
    </a-modal>
    <!--管理员注销账户对话框-->
    <a-modal v-model:open="deleteDiaLog" title="注销账户" width="450px">
      <p><ExclamationCircleOutlined class="text-yellow-300 font-extrabold text-xl mr-2"/>确认要注销该账户吗？</p>
      <template #footer>
        <a-button class="mt-4" danger @click="OkDeleteUser()">确认</a-button>
        <a-button @click="CancelDeleteUser">取消</a-button>
      </template>
    </a-modal>
    <!--封禁账户对话框-->
    <a-modal v-model:open="banDiaLog" title="封禁账户" width="450px">
      <p>确认要封禁该账户吗？</p>
      <template #footer>
        <a-button class="mt-4" danger @click="OkBanUser">确认</a-button>
        <a-button @click="CancelBanUser">取消</a-button>
      </template>
    </a-modal>
    <!--管理员重置密码对话框-->
    <a-modal v-model:open="resetDiaLog" title="重置密码" width="450px">
      <p><ExclamationCircleOutlined class="text-yellow-300 font-extrabold text-xl mr-2"/>确认要重置密码吗？</p>
      <template #footer>
        <a-button class="mt-4" danger @click="OkResetUser">确认</a-button>
        <a-button @click="CancelResetUser">取消</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script setup>

//引入区
import {
  AuditOutlined,
  DeleteOutlined,
  EditOutlined,
  IdcardOutlined,
  MailOutlined,
  PhoneOutlined,
  PlusOutlined,
  SearchOutlined,
  UndoOutlined,
  UserOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons-vue";
import { reactive, ref } from 'vue';
import {breadcrumbs} from "@/assets/js/DashboardBreadCrumb.js";
import {
  getUserList,
  getRoleList,
  userAdd,
  userManageEdit,
  userDelete,
  userBan,
  getAll, getAvailable, getBanList,
} from "@/assets/js/PublishUtil.js";
import {
  userDeleteVO,
  userManageEditVO,
  userBanVO,
  roleListVO,
  userAddVO, userListVO, userResetVO
} from "@/assets/js/VoModel.js"


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
    title: '账户序列号',
    dataIndex: 'uuid',
    key: 'uuid',
  },
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



//账户列表
let getUserListVO = reactive( userListVO);
let dataUser =  getUserList(getUserListVO);

//获取全部账户
let GetAll = getAll(getUserListVO);

//获取可用账户
let GetAvailable = getAvailable(getUserListVO);

//获取封禁的账户
let GetBanList = getBanList(getUserListVO);

//增加账户
let addDiaLog = ref(false);
let getUserAddVO = reactive(userAddVO);
let addUser = userAdd(getUserAddVO);

function showAddDiaLog(){
  addDiaLog.value = true;
}
function okAddUser() {
  const getReturnData1 = userAdd(getUserAddVO)
  if (getReturnData1.value.output === "Success") {
    addDiaLog.value = false
    dataUser = getUserList(getUserListVO);
  }
}

//取消新增
const CancelAddUser = () => addDiaLog.value = false;

//修改账户
const manager_editDiaLog = ref(false);

let getUserManageEditVO = reactive(userManageEditVO);
function showManagerEditDiaLog(record) {
  manager_editDiaLog.value = true;
  getUserManageEditVO.userName = record.username;
  getUserManageEditVO.realName = record.realname;
  getUserManageEditVO.email = record.email;
  getUserManageEditVO.uuid = record.uuid;
}
function OkManagerEditUser() {
  const getReturnData2 = userManageEdit(getUserManageEditVO.uuid, getUserManageEditVO)
  if (getReturnData2.value.output === "Success") {
    manager_editDiaLog.value = false
    dataUser = getUserList(getUserListVO);
  }
}

//取消修改
const CancelManagerEditUser = () => manager_editDiaLog.value = false;

// 注销账户
const deleteDiaLog = ref(false);
let getUserDeleteVO = reactive(userDeleteVO);

function showDeleteDiaLog(record) {
  deleteDiaLog.value = true;
  getUserDeleteVO.uuid = record.uuid;
}

function  OkDeleteUser() {
  const getReturnData3 = userDelete(getUserDeleteVO.uuid)
  if (getReturnData3.value.output === "Success") {
    deleteDiaLog.value = true
    dataUser = getUserList(getUserListVO);
  }
}

//取消注销
const CancelDeleteUser = () => deleteDiaLog.value = false;

//封禁账户
const banDiaLog = ref(false);
let getUserBanVO = reactive( userBanVO);

function showBanDiaLog(record) {
  banDiaLog.value = true;
  getUserBanVO.uuid = record.uuid;
}
function  OkBanUser() {
  const getReturnData4 = userBan(getUserBanVO.uuid)
  if (getReturnData4.value.output === "Success") {
    banDiaLog.value = true
    dataUser = getUserList(getUserListVO);
  }
}

//取消封禁
const CancelBanUser = () => banDiaLog.value = false;

//账户密码重置
const resetDiaLog = ref(false);
let getUserResetVO = reactive(userResetVO);
function showResetDiaLog(record) {
  resetDiaLog.value = true;
  getUserResetVO.uuid = record.uuid;
}
function  OkResetUser() {
  const getReturnData5 = userBan(getUserResetVO.uuid)
  if (getReturnData5.value.output === "Success") {
    resetDiaLog.value = true
    dataUser = getUserList(getUserListVO);
  }
}

//取消账户密码重置
const CancelResetUser = () => resetDiaLog.value = false;

//获取角色列表
let getroleListVO = reactive(roleListVO);
let dataRole =  getRoleList(getroleListVO);
</script>