<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="账户管理"
  >
    <template #extra>
      <!--头部-->
      <div class="flex w-full justify-end">
        <a-input v-model:value="data.search" class="h-8 border-gray-300 rounded-md" placeholder="输入账户信息"/>
        <a-button class="ml-4 mr-4 flex justify-center items-center" @click="SearchUser">
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
    <a-radio-group :value="data.type" button-style="solid" class="mt-6">
      <a-radio-button value="all" @click="GetAll">全部</a-radio-button>
      <a-radio-button value="available" @click="GetAvailable">可用</a-radio-button>
      <a-radio-button value="banlist" @click="GetBanlist">封禁</a-radio-button>
      <a-radio-button value="unbanlist" @click="GetUnBanlist">未封禁</a-radio-button>
    </a-radio-group>
  </a-page-header>
  <div class="px-3">
    <!--表格内容-->
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns" :data-source="userlist.userlist_data" :loading="loading">
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
            <span style="margin-left: 10px; display: flex">
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
            </span>
          </template>
        </template>
      </a-table>
    </div>

    <!--新增账户对话框-->
    <a-modal v-model:open="addDiaLog" title="新增账户" width="450px" @cancel="CancelAddUser" @ok="OkAddUser">
      <a-form
          :label-col="{ span: 5}"
          class="p-4 flex-col justify-center"
      >
        <a-form-item
            :rules="[{ required: true }]"
            label="账户名"
        >
          <a-input v-model:value="addData.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="真实姓名"
        >
          <a-input v-model:value="addData.realname">
            <template #prefix>
              <IdcardOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="手机号"
        >
          <a-input v-model:value="addData.phone">
            <template #prefix>
              <PhoneOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="邮箱"
        >
          <a-input v-model:value="addData.email">
            <template #prefix>
              <MailOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="角色"
        >
          <a-input v-model:value="addData.role">
            <template #prefix>
              <SolutionOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
      </a-form>
      <template #footer>
        <a-button @click="CancelAddUser">取消</a-button>
        <a-button class="bg-aspargus mt-4" type="primary" @click="OkAddUser">确认</a-button>
      </template>
    </a-modal>

    <!--管理员修改账户对话框-->
    <a-modal v-model:open="manager_editDiaLog" title="修改账户"
             width="550px" @cancel="CancelManagerEditUser" @ok="OkManagerEditUser">
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
              <a-input v-model:value="manager_editData.userName">
                <template #prefix>
                  <UserOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
                label="昵称"
            >
              <a-input v-model:value="manager_editData.nickName">
                <template #prefix>
                  <AuditOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
                :rules="[{ required: true }]"
                label="真实信息"
            >
              <a-input v-model:value="manager_editData.realName">
                <template #prefix>
                  <MailOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
                :rules="[{ required: true }]"
                label="邮箱"
            >
              <a-input v-model:value="manager_editData.email">
                <template #prefix>
                  <MailOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
                label="手机号"
            >
              <a-input v-model:value="manager_editData.phone">
                <template #prefix>
                  <PhoneOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
            </a-form-item>
          </div>
          <div>
            <a-form-item>
              <a-upload v-model:value="manager_editData.avatar" action="/upload.do" list-type="picture-card">
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
        <a-button class="bg-aspargus mt-4" type="primary" @click="OkManagerEditUser">确认</a-button>
      </template>
    </a-modal>
    <!--管理员删除账户对话框-->
    <a-modal v-model:open="deleteDiaLog" title="注销账户" width="450px">
      <p>确认要注销该账户吗？</p>
      <template #footer>
        <a-button class="mt-4" danger @click="OkDeleteUser">确认</a-button>
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
  </div>
</template>

<script setup>
import {
  AuditOutlined,
  DeleteOutlined,
  EditOutlined,
  IdcardOutlined,
  MailOutlined,
  PhoneOutlined,
  PlusOutlined,
  SearchOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import {onMounted, reactive, ref} from 'vue';
import request from "@/assets/js/request.js";
import breadcrumbs from "@/assets/js/DashboardBreadCrumb.js";
import {message} from "ant-design-vue";

breadcrumbs.push({breadcrumbName: '网站管理'});
breadcrumbs.push({path: '/user', breadcrumbName: '账户管理'});


const routes = breadcrumbs
setTimeout(() => {
  breadcrumbs.pop();
  breadcrumbs.pop();
}, 1)

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

//获取账户
const data = reactive({
  type: 'all',
  search: '',
  limit: '',
  page: '',
  order: 'asc'
});

const userlist = reactive({
  userlist_data: []
});

//新增用户对话框
const addDiaLog = ref(false);
const addData = reactive({
  username: '',
  realname: '',
  phone: '',
  email: '',
  role: ''
})

//修改账户
const manager_editDiaLog = ref(false);
const manager_editData = reactive({
  userName: '',
  nickName: '',
  realName: '',
  avatar: '',
  email: '',
  phone: '',
  uuid: ''
})


// 注销账户
const deleteDiaLog = ref(false);
const deleteData = reactive({
  uuid: ''
})

//封禁账户
const banDiaLog = ref(false);
const banData = reactive({
  uuid:''
})

onMounted(() => {
  UserList()
})


//默认获取全部账户
function UserList() {
  request.getUserList(data).then((res) => {
    switch (data.type) {
      case 'all':
        userlist.userlist_data = res.data.data
        break
      default:
        userlist.userlist_data = res.data.data
    }
  })
}

//获取全部账户
function GetAll() {
  data.type = 'all'
  request.getUserList(data).then((res) => {
    userlist.userlist_data = []
    userlist.userlist_data = res.data.data
  })
}

//获取可用的账户
function GetAvailable() {
  data.type = 'available'
  request.getUserList(data).then((res) => {
    userlist.userlist_data = []
    userlist.userlist_data = res.data.data
  })
}

//获取封禁的账户
function GetBanlist() {
  data.type = 'banlist'
  request.getUserList(data).then((res) => {
    userlist.userlist_data = []
    userlist.userlist_data = res.data.data
  })
}

//获取未封禁、注销的账户
function GetUnBanlist() {
  data.type = 'unbanlist'
  request.getUserList(data).then((res) => {
    userlist.userlist_data = []
    userlist.userlist_data = res.data.data
  })
}

//查询账户
function SearchUser() {
  data.type = 'search'
  request.getUserList(data).then((res) => {
    if (data.search === '') {
      UserList()
    } else {
      userlist.userlist_data = []
      userlist.userlist_data = res.data.data
    }
  })
}

//新增账户
function showAddDiaLog() {
  addDiaLog.value = true;
  addData.username = '';
  addData.realname = '';
  addData.phone = '';
  addData.email = '';
  addData.role = '';
}

function OkAddUser() {
  request.UserAdd(addData).then((res) => {
    if (res.data.code === 200) {
      addDiaLog.value = false;
      message.success('新增成功')
      GetAll()
    } else {
      addDiaLog.value = false;
      message.error('新增失败')
    }
  })
}

//取消新增账户
function CancelAddUser() {
  addDiaLog.value = false;
}

//管理员修改账户
function showManagerEditDiaLog(record) {
  manager_editDiaLog.value = true;
  manager_editData.userName = record.username;
  manager_editData.realName = record.realname;
  manager_editData.email = record.email;
  manager_editData.uuid = record.uuid;
}

function OkManagerEditUser() {
  request.UserManagerEdit(manager_editData.uuid, manager_editData).then((res) => {
    manager_editDiaLog.value = false;
    message.success(res.data.message)
    GetAll()
  }).catch((err) => {
    message.error(err.response.data.message)
  })
}

//取消修改账户
function CancelManagerEditUser() {
  manager_editDiaLog.value = false;
}

//注销账户
function showDeleteDiaLog(record) {
  deleteDiaLog.value = true;
  deleteData.uuid = record.uuid
}

function OkDeleteUser() {
  request.UserDelete(deleteData.uuid).then((res) => {
      deleteDiaLog.value = false;
      message.success(res.data.message)
      GetAll()
  }).catch((err) => {
    deleteDiaLog.value = true;
    message.error(err.response.data.message)
  })
}

//取消注销账户
function CancelDeleteUser() {
  deleteDiaLog.value = false;
}

//封禁账户
function showBanDiaLog(record){
  banDiaLog.value = true
  banData.uuid = record.uuid
}

function OkBanUser(){
  request.UserBan(banData.uuid).then((res) => {
    message.success((res.data.message))
    GetAll()
  }).catch((err) => {
    message.error(err.response.data.message)
  })
}

//取消封禁账户
function CancelBanUser(){
  banDiaLog.value = false;
}
</script>