<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="角色管理"
  >
    <template #extra>
      <!--头部-->
      <div class="flex w-full justify-end">
        <a-input v-model:value="data.search" class="h-8 border-gray-300 rounded-md" placeholder="请输入角色信息"/>
        <a-button class="ml-4 mr-4 flex justify-center items-center" @click="SearchRole">
          <SearchOutlined/>
          查询
        </a-button>
        <a-button class="text-blue-50 bg-aspargus flex justify-center items-center" type="primary"
                  @click="showAddDiaLog">
          <PlusOutlined/>
          新增角色
        </a-button>
      </div>
    </template>
    <a-descriptions-item>
      <div class="text-mount-pink">
        角色管理，包括角色的增删改查，角色的状态，角色的创建时间，角色的更新时间，角色是否已被删除等。
      </div>
    </a-descriptions-item>
    <a-radio-group :value="data.type" button-style="solid" class="mt-6">
      <a-radio-button value="all" @click="GetAll">全部</a-radio-button>
      <a-radio-button value="search" @click="$router.push('/dashboard/search-role')">查询</a-radio-button>
    </a-radio-group>
  </a-page-header>
  <div class="px-3">
    <!--表格内容-->
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns" :data-source="rolelist.rolelist_data" :rowKey="record => record.id">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key==='uuid'">
            {{ record.uuid }}
          </template>
          <template v-else-if="column.key === 'name'">
            {{ record.name }}
          </template>
          <template v-else-if="column.key === 'displayName'">
            {{ record.displayName }}
          </template>
          <template v-else-if="column.key==='action'">
            <span style="margin-left: 10px; display: flex">
              <a-button class="text-aspargus flex justify-center items-center" size="small"
                        type="text" @click="showEditDiaLog(record)">
                <EditOutlined/>
                修改
              </a-button>
              <a-button class="text-aspargus flex justify-center items-center" size="small"
                        type="text" @click="showDeleteDiaLog(record)">
                <DeleteOutlined/>
                删除
              </a-button>
            </span>
          </template>
        </template>
      </a-table>
    </div>

    <!--新增角色对话框-->
    <a-modal width="900px" v-model:open="addDiaLog" title="新增角色" >
      <a-form
          :label-col="{ span: 5}"
          class="p-4 flex-col justify-center"
      >
        <a-form-item
            :rules="[{ required: true }]"
            label="角色名"
        >
          <a-input v-model:value="addData.name">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            label="展示名字"
        >
          <a-input v-model:value="addData.displayName">
            <template #prefix>
              <ProfileOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="权限组"
        >
          <a-transfer
              v-model:target-keys="targetKeys"
              v-model:selected-keys="selectedKeys"
              :titles:="['所有权限', '拥有权限']"
              :data-source="permissionList.permissionList_data"
              :list-style="{width: '300px',height: '300px',}"
          >
            <template #render="item">
              <span>{{ item.name }}</span>
            </template>
          </a-transfer>
          <a-transfer
              v-model:target-keys="targetKeys"
              v-model:selected-keys="selectedKeys"
              :data-source="mockData"
              :titles="['Source', 'Target']"
              :render="item => item.title"
          />
        </a-form-item>
      </a-form>
      <template #footer>
        <a-button @click="CancelAddRole">取消</a-button>
        <a-button class="bg-aspargus mt-4" type="primary" @click="OkAddRole">确认</a-button>
      </template>
    </a-modal>
    <!--修改角色对话框-->
    <a-modal width="450px" v-model:open="editDiaLog" title="新增角色" >
      <a-form
          :label-col="{ span: 5}"
          class="p-4 flex-col justify-center"
      >
        <a-form-item
            :rules="[{ required: true }]"
            label="角色名"
        >
          <a-input v-model:value="addData.name">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            label="展示名字"
        >
          <a-input v-model:value="addData.displayName">
            <template #prefix>
              <ProfileOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="权限组"
        >
          <a-input v-model:value="addData.permission">
            <template #prefix>
              <SettingOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
      </a-form>
      <template #footer>
        <a-button @click="CancelEditRole">取消</a-button>
        <a-button class="bg-aspargus mt-4" type="primary" @click="OkEditRole">确认</a-button>
      </template>
    </a-modal>
    <!--删除角色对话框-->
    <a-modal v-model:open="deleteDiaLog" title="删除角色" width="450px">
      <p>确认要删除该角色吗？</p>
      <template #footer>
        <a-button class="mt-4" danger @click="OkDeleteRole">确认</a-button>
        <a-button @click="CancelDeleteRole">取消</a-button>
      </template>
    </a-modal>
  </div>
  <router-view></router-view>
</template>

<script setup>
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  ProfileOutlined,
  SettingOutlined
} from "@ant-design/icons-vue";
import {onMounted, reactive, ref} from 'vue';
import request from "@/assets/js/Request.js";
import breadcrumbs from "@/assets/js/DashboardBreadCrumb.js";
import {message} from "ant-design-vue";

breadcrumbs.push({breadcrumbName: '网站管理'});
breadcrumbs.push({path: '/user', breadcrumbName: '角色管理'});
const routes = breadcrumbs
setTimeout(() => {
  breadcrumbs.pop();
  breadcrumbs.pop();
}, 1)

//表格栏目
const columns = [
  {
    title: '角色序列号',
    dataIndex: 'uuid',
    key: 'uuid',
  },
  {
    title: '角色名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '角色名描述',
    key: 'displayName',
    dataIndex: 'displayName',
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  },
];

//获取角色列表
const data = reactive({
  type:'all',
  search:'',
  limit:'',
  page:'',
  order:'asc'
})

const rolelist = reactive({
  rolelist_data: []
});


//新增角色对话框
const addDiaLog = ref(false);
const addData = reactive({
  name:'',
  displayName:'',
  permission:''
})

//修改角色对话框
const editDiaLog = ref(false);
const editData = ref({
  name:'',
  displayName:'',
  permission:''
})

//删除角色对话框
const deleteDiaLog = ref(false);
const deleteData = ref({
  uuid:''
})

//权限列表
const permission_data = reactive({
  limit:'',
  page:'',
  order:'asc'
})

const permissionList = reactive({
  permissionList_data:[]
})

//获取权限列表
function PermissionList(){
  request.getPermissionList(permission_data).then((res) => {
    permissionList.permissionList_data = res.data.data
  })
}


const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
  });
}
const oriTargetKeys = mockData.filter(item => +item.key % 3 > 0).map(item => item.key);
const targetKeys = ref(oriTargetKeys);
const selectedKeys = ref([]);

onMounted(() => {
  RoleList()
})

//获取角色列表
function RoleList() {
  request.getRoleList(data).then((res) => {
    switch (data.type) {
      case 'all':
        rolelist.rolelist_data = res.data.data
        break
      default:
        rolelist.rolelist_data = res.data.data
    }
  })
}

//获取全部角色
function GetAll() {
  data.type = 'all'
  request.getRoleList(data).then((res) => {
    rolelist.rolelist_data = []
    rolelist.rolelist_data = res.data.data
  })
}

//查询角色
function SearchRole() {
  data.type = 'search'
  request.getRoleList(data).then((res) => {
    if (data.search === '') {
        RoleList()
    } else {
      rolelist.rolelist_data = []
      rolelist.rolelist_data = res.data.data
    }
  })
}

//新增角色
function showAddDiaLog(){
  addDiaLog.value = true;
  addData.name = '';
  addData.displayName = '';
  PermissionList();
}

function OkAddRole() {
  request.RoleAdd(addData).then((res) => {
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

//取消新增角色
function CancelAddRole() {
  addDiaLog.value = false;
}

//修改角色
function showEditDiaLog(record) {
  editDiaLog.value = true;
  editData.userName = record.username;
  editData.realName = record.realname;
  editData.email = record.email;
  editData.uuid = record.uuid;
}

function OkEditRole() {
  request.UserManagerEdit(editData.uuid, editData).then((res) => {
    editDiaLog.value = false;
    message.success(res.data.message)
    GetAll()
  }).catch((err) => {
    message.error(err.response.data.message)
  })
}

//取消修改角色
function CancelEditRole() {
  editDiaLog.value = false;
}

//删除角色
function showDeleteDiaLog(record) {
  deleteDiaLog.value = true;
  deleteData.uuid = record.uuid
}

function OkDeleteRole() {
  request.RoleDelete(deleteData.uuid).then((res) => {
    deleteDiaLog.value = false;
    message.success(res.data.message)
    GetAll()
  }).catch((err) => {
    deleteDiaLog.value = true;
    message.error(err.response.data.message)
  })
}

//取消删除角色
function CancelDeleteRole() {
  deleteDiaLog.value = false;
}

</script>