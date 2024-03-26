<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="角色管理"
  >
    <template v-if="getSelectRadio === 'all'" #extra>
      <!--头部-->
      <div class="flex w-full justify-end">
        <a-input v-model:value="getRoleListVO.search" class="h-8 border-gray-300 rounded-md"
                 placeholder="请输入角色信息"/>
        <a-button class="ml-4 mr-4 flex justify-center items-center" @click="changeSelectRadio('search')">
          <SearchOutlined/>
          查询
        </a-button>
        <a-button class="text-blue-50 bg-aspargus flex justify-center items-center" type="primary"
                  @click="showDialogWithAddRole()">
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
    <a-radio-group :value="getSelectRadio" button-style="solid" class="mt-6">
      <a-radio-button value="all" @click="getRoleListFunction('all')">全部</a-radio-button>
      <a-radio-button value="search" @click="changeSelectRadio('search')">查询</a-radio-button>
    </a-radio-group>
  </a-page-header>
  <div class="px-6">
      <div class="grid grid-cols-6 gap-3" v-if="getSelectRadio === 'search'">
        <a-input v-model:value="getRoleListVO.search" placeholder="organize" class="col-span-5">
          <template #prefix><SearchOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
        </a-input>
        <a-button type="primary" class="bg-aspargus" @click="onSearch">
          查询角色
        </a-button>
      </div>
      <!--表格内容-->
      <div class="w-full h-auto mt-6 rounded" v-if="getSelectRadio === 'all' || (getSelectRadio === 'search' && getRoleListVO.search !== '')">
        <a-table :columns="columns" :data-source="dataRole.data">
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
                        type="text" @click="showDialogWithEditUser(record)">
                <EditOutlined/>
                修改
              </a-button>
              <a-button class="text-aspargus flex justify-center items-center" size="small"
                        type="text" @click="showDialogWithDeleteRole(record)">
                <DeleteOutlined/>
                删除
              </a-button>
            </span>
            </template>
          </template>
        </a-table>
      </div>
  </div>

  <!--新增角色对话框-->
  <a-modal v-model:open="addRoleDialog" title="新增角色" width="900px">
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
      <!--      <a-form-item
                :rules="[{ required: true }]"
                label="权限组"
            >
              <a-transfer
                  v-model:target-keys="targetKeys"
                  v-model:selected-keys="selectedKeys"
                  :titles:="['所有权限', '拥有权限']"
                  :data-source="totalPermissionList.permissionList_data"
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
            </a-form-item>-->
    </a-form>
    <template #footer>
      <a-button @click="closeDialogRoleAdd()">取消</a-button>
      <a-button class="bg-aspargus mt-4" type="primary" @click="consoleAddRole()">确认</a-button>
    </template>
  </a-modal>

  <!--修改角色对话框-->
  <a-modal v-model:open="editRoleDialog" title="修改角色" width="450px">
    <a-form
        :label-col="{ span: 5 }"
        class="p-4 flex-col justify-center"
    >
      <a-form-item
          :rules="[{ required: true }]"
          label="角色名"
      >
        <a-input v-model:value="getRoleEditVO.name">
          <template #prefix>
            <UserOutlined class="site-form-item-icon"/>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
          label="展示名字"
      >
        <a-input v-model:value="getRoleEditVO.displayName">
          <template #prefix>
            <ProfileOutlined class="site-form-item-icon"/>
          </template>
        </a-input>
      </a-form-item>
      <div>
        <a-transfer
            v-model:target-keys="selectedPermission"
            :data-source="permissionList"
            :titles="['全部权限', '分配权限']"
            :render="item => item.title"
            @change="handleChange"
            @selectChange="handleSelectChange"
            @scroll="handleScroll"
        />
      </div>
    </a-form>
    <template #footer>
      <a-button @click="closeDialogRoleEdit">取消</a-button>
      <a-button class="bg-aspargus mt-4" type="primary" @click=" consoleEditRole()">确认</a-button>
    </template>
  </a-modal>

  <!--删除角色对话框-->
  <a-modal v-model:open="deleteRoleDialog" title="删除角色" width="450px">
    <p>
      <ExclamationCircleOutlined class="text-yellow-300 font-extrabold text-xl mr-2"/>
      确认要删除该角色吗？
    </p>
    <template #footer>
      <a-button class="mt-4" danger @click="consoleDeleteRole()">确认</a-button>
      <a-button @click="closeDialogRoleDelete">取消</a-button>
    </template>
  </a-modal>
</template>

<script setup>
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  ProfileOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons-vue";
import {reactive, ref, watch} from 'vue';
import {roleAddVO, roleDeleteVO, roleEditVO, roleListVO} from "@/assets/js/VoModel.js";
import {
  getPermissionListRequest,
  getRoleListRequest,
  roleDeleteRequest,
  roleEditRequest,
  userAddRequest
} from "@/assets/js/PublishUtil.js";


const addRoleDialog = ref(false);
const editRoleDialog = ref(false);
const deleteRoleDialog = ref(false);
const isSearchListView = ref(false);
const getSelectRadio = ref('all');
let getRoleListVO = reactive(roleListVO);
let getRoleDeleteVO = reactive(roleDeleteVO);
let getRoleAddVO = reactive(roleAddVO);
let getRoleEditVO = reactive(roleEditVO);
let selectedPermission = ref([]);
const totalPermissionList = [];
let permissionList = totalPermissionList;

let dataRole = getRoleListRequest('all', getRoleListVO);
const getPermissionList = getPermissionListRequest();

const showDialogWithAddRole = () => addRoleDialog.value = true;
const showDialogWithDeleteRole = (record) => {
  deleteRoleDialog.value = true;
  getRoleDeleteVO.uuid = record.uuid
}
const showDialogWithEditUser = (record) => {
  permissionList = totalPermissionList
  const getPermission = [];
  editRoleDialog.value = true;
  getRoleEditVO.uuid = record.uuid;
  getRoleEditVO.name = record.name;
  getRoleEditVO.displayName = record.displayName;
  // 穿梭框逻辑操作
  record.permission.forEach(it => {
    console.log("demo")
    permissionList.filter(item => item.key === it);
    getPermission.push({
      key: it,
      title: it
    })
  })
  selectedPermission = ref(getPermission);
  console.log(selectedPermission)
  console.log(getRoleEditVO)
}

const closeDialogRoleAdd = () => addRoleDialog.value = false;
const closeDialogRoleEdit = () => editRoleDialog.value = false;
const closeDialogRoleDelete = () => deleteRoleDialog.value = false;

/**
 * 添加角色
 */
const consoleAddRole = () => {
  if (userAddRequest(getRoleAddVO).value.output === "Success") {
    addRoleDialog.value = false
    dataRole = getRoleListRequest('all', getRoleListVO);
  }
}

/**
 * 角色编辑
 */
const consoleEditRole = () => {
  if (roleEditRequest(getRoleEditVO.uuid, getRoleEditVO).value.output === "Success") {
    editRoleDialog.value = false
    dataRole = getRoleListRequest('all', getRoleListVO);
  }
}

/**
 * 删除角色
 */
const consoleDeleteRole = () => {
  if (roleDeleteRequest(getRoleDeleteVO.uuid).value.output === "Success") {
    deleteRoleDialog.value = false
    dataRole = getRoleListRequest('all', getRoleListVO);
  }
}

function changeSelectRadio(type) {
  getSelectRadio.value = type;
}

/**
 * 获取 RoleList 函数
 * @param type
 */
function getRoleListFunction(type) {
  changeSelectRadio(type);
  if (type === 'all') {
    dataRole = getRoleListRequest('all', getRoleListVO)
  } else {
    dataRole = getRoleListRequest('search', getRoleListVO)
  }
}

function onSearch() {
  isSearchListView.value = true;
  dataRole = getRoleListRequest('search', getRoleListVO);
}

watch(getRoleListVO, _ => {
  dataRole = getRoleListRequest('search', getRoleListVO);
})

watch(getPermissionList, newValue => {
  console.log(newValue)
  newValue.data.forEach(it => {
    totalPermissionList.push({
      key: it.name,
      title: it.name
    })
  })
})

const handleChange = (nextTargetKeys, direction, moveKeys) => {
  console.log('targetKeys: ', nextTargetKeys);
  console.log('direction: ', direction);
  console.log('moveKeys: ', moveKeys);
};
const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
  console.log('sourceSelectedKeys: ', sourceSelectedKeys);
  console.log('targetSelectedKeys: ', targetSelectedKeys);
};
</script>

<script>
import {breadcrumbs} from "@/assets/js/DashboardBreadCrumb.js";

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
</script>