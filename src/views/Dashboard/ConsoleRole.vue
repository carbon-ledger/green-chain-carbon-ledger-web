<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="角色管理"
  >
    <template #extra>
      <!--头部-->
      <div class="flex w-full justify-end">
        <a-input v-model:value="getRoleListVO.search" class="h-8 border-gray-300 rounded-md" placeholder="请输入角色信息"/>
        <a-button class="ml-4 mr-4 flex justify-center items-center">
          <SearchOutlined/>
          查询
        </a-button>
        <a-button class="text-blue-50 bg-aspargus flex justify-center items-center" type="primary"
                  @click="showAddDiaLog()">
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
    <a-radio-group :value="getRoleEditVO.type" button-style="solid" class="mt-6">
      <a-radio-button value="all" @click="dataRole">全部</a-radio-button>
      <a-radio-button value="search">查询</a-radio-button>
    </a-radio-group>
  </a-page-header>
  <div class="px-3">
    <!--表格内容-->
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns" :data-source="dataRole.data" :rowKey="record => record.id">
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
          <a-input v-model:value=" getRoleAddVO.name">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            label="展示名字"
        >
          <a-input v-model:value=" getRoleAddVO.displayName">
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
        <a-button class="bg-aspargus mt-4" type="primary" @click="okAddRole()">确认</a-button>
      </template>
    </a-modal>
    <!--修改角色对话框-->
    <a-modal width="450px" v-model:open="editDiaLog" title="修改角色" >
      <a-form
          :label-col="{ span: 5}"
          class="p-4 flex-col justify-center"
      >
        <a-form-item
            :rules="[{ required: true }]"
            label="角色名"
        >
          <a-input v-model:value="getRoleAddVO.name">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            label="展示名字"
        >
          <a-input v-model:value="getRoleAddVO.displayName">
            <template #prefix>
              <ProfileOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true }]"
            label="权限组"
        >
          <a-input v-model:value="getRoleAddVO.permission">
            <template #prefix>
              <SettingOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
      </a-form>
      <template #footer>
        <a-button @click="CancelRoleEdit">取消</a-button>
        <a-button class="bg-aspargus mt-4" type="primary" @click=" OkRoleEdit()">确认</a-button>
      </template>
    </a-modal>
    <!--删除角色对话框-->
    <a-modal v-model:open="deleteDiaLog" title="删除角色" width="450px">
      <p><ExclamationCircleOutlined class="text-yellow-300 font-extrabold text-xl mr-2"/>确认要删除该角色吗？</p>
      <template #footer>
        <a-button class="mt-4" danger @click="OkDeleteRole()">确认</a-button>
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
  SettingOutlined, ExclamationCircleOutlined
} from "@ant-design/icons-vue";
import { reactive, ref} from 'vue';
import request from "@/assets/js/Request.js";
import {breadcrumbs} from "@/assets/js/DashboardBreadCrumb.js";
import {roleAddVO, roleDeleteVO, roleEditVO, roleListVO} from "@/assets/js/VoModel.js";
import {getRoleList, roleDelete, roleEdit, userAdd} from "@/assets/js/PublishUtil.js";

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
let getRoleListVO = reactive(roleListVO);
let  dataRole = getRoleList(getRoleListVO);


//新增角色
const addDiaLog = ref(false);
let getRoleAddVO = reactive(roleAddVO);
function showAddDiaLog(){
  addDiaLog.value = true;
  getRoleAddVO.name = '';
  getRoleAddVO.displayName = '';
}

function okAddRole() {
  const getReturnData1 = userAdd(getRoleAddVO)
  if (getReturnData1.value.output === "Success") {
    addDiaLog.value = false
    dataRole = getRoleList(getRoleAddVO);
  }
}

//取消新增
const CancelAddRole = () => addDiaLog.value = false;

//修改角色
const editDiaLog =ref(false);
let getRoleEditVO = reactive(roleEditVO);
function showEditDiaLog(record) {
  editDiaLog.value = true;
  getRoleEditVO.name = record.name;
  getRoleEditVO.displayName = record.displayName;
  getRoleEditVO.permission = record.permission;
  getRoleEditVO.uuid = record.uuid;
}

function  OkRoleEdit() {
  const getReturnData2 = roleEdit( getRoleEditVO .uuid,  getRoleEditVO )
  if (getReturnData2.value.output === "Success") {
    editDiaLog.value = false
    dataRole = getRoleList(getRoleListVO);
  }
}

//取消修改
const CancelRoleEdit = () => editDiaLog.value = false;


//删除角色
const deleteDiaLog = ref(false);
let getroleDeleteVO = reactive(roleDeleteVO);
function showDeleteDiaLog(record) {
  deleteDiaLog.value = true;
  getroleDeleteVO.uuid = record.uuid
}
function OkDeleteRole() {
  const getReturnData3 = roleDelete( getroleDeleteVO.uuid )
  if (getReturnData3.value.output === "Success") {
    deleteDiaLog.value = false
    dataRole = getRoleList(getRoleListVO);
  }
}

//取消删除
const CancelDeleteRole = () => deleteDiaLog.value = false;

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







</script>