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
    <div v-if="getSelectRadio === 'search'" class="grid grid-cols-6 gap-3">
      <a-input v-model:value="getRoleListVO.search" class="col-span-5" placeholder="organize">
        <template #prefix>
          <SearchOutlined style="color: rgba(0, 0, 0, 0.25)"/>
        </template>
      </a-input>
      <a-button class="bg-aspargus" type="primary" @click="onSearch">
        查询角色
      </a-button>
    </div>
    <!--表格内容-->
    <div v-if="getSelectRadio === 'all' || (getSelectRadio === 'search' && getRoleListVO.search !== '')"
         class="w-full h-auto mt-6 rounded">
      <a-table :columns="columns" :data-source="getRoleList.data">
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
                        type="text" @click="showDialogWithDeleteRole(record.uuid)"
                        v-if="record.name !== 'console' && record.name !== 'admin' && record.name !== 'organize' && record.name !== 'default'">
                <DeleteOutlined/>
                删除
              </a-button>
              <a-button class="text-aspargus flex justify-center items-center" size="small"
                        type="text" v-else disabled>
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
  <a-modal v-model:open="dialogAddRole" class="w-48" title="新增角色">
    <a-form
        :label-col="{ span: 5 }"
        class="p-4 grid justify-center"
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
      <div>
        <a-transfer
            v-model:target-keys="addRoleTargetKeys"
            :data-source="permissionList"
            :render="item => item.key"
            :titles="['全部权限', '分配权限']"
            @change="handleChange"
            @selectChange="handleSelectChange"
        />
      </div>
    </a-form>
    <template #footer>
      <a-button @click="closeDialogRoleAdd()">取消</a-button>
      <a-button class="bg-aspargus mt-4" type="primary" @click="consoleAddRole()">确认</a-button>
    </template>
  </a-modal>

  <!--修改角色对话框-->
  <a-modal v-model:open="dialogEditRole" class="w-48" title="修改角色">
    <a-form
        :label-col="{ span: 5 }"
        class="p-4 grid justify-center"
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
            v-model:target-keys="editRoleTargetKeys"
            :data-source="permissionList"
            :render="item => item.key"
            :titles="['全部权限', '分配权限']"
            @change="handleChange"
            @selectChange="handleSelectChange"
        />
      </div>
    </a-form>
    <template #footer>
      <a-button @click="closeDialogRoleEdit">取消</a-button>
      <a-button class="bg-aspargus mt-4" type="primary" @click=" consoleEditRole()">确认</a-button>
    </template>
  </a-modal>

  <!--删除角色对话框-->
  <a-modal v-model:open="dialogDeleteRole" title="删除角色" width="450px">
    <p>
      <ExclamationCircleOutlined class="text-yellow-300 font-extrabold text-xl mr-2"/>
      确认要删除该角色吗？
    </p>
    <template #footer>
      <a-button class="mt-4" danger @click="consoleDeleteRole">确认</a-button>
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
import {onMounted, reactive, ref} from 'vue';
import {roleAddVO, roleEditVO, roleListVO} from "@/assets/js/VoModel.js";
import {getRoleListApi, roleAddApi, roleDeleteApi, roleEditApi} from "@/api/RoleApi.js"
import {getPermissionListApi} from "@/api/PermissionApi.js";
import {permissionListDO, roleListDO} from "@/assets/js/DoModel.js";
import {message} from "ant-design-vue";
import {breadcrumbs} from "@/utils/DashboardBreadCrumb.js";


const dialogAddRole = ref(false);
const dialogEditRole = ref(false);
const dialogDeleteRole = ref(false);
const isSearchListView = ref(false);
const getSelectRadio = ref('all');
const getDeleteRoleUuid = ref('');
const getRoleListVO = reactive(roleListVO);
const getRoleAddVO = reactive(roleAddVO);
const getRoleEditVO = reactive(roleEditVO);
const editRoleTargetKeys = ref([]);
const addRoleTargetKeys = ref([]);
const permissionList = ref([]);
const getRoleList = ref(roleListDO);
const getPermissionList = ref(permissionListDO);
const routes = breadcrumbs

breadcrumbs.push({breadcrumbName: '网站管理'});
breadcrumbs.push({path: '/user', breadcrumbName: '角色管理'});
setTimeout(() => {
  breadcrumbs.pop();
  breadcrumbs.pop();
}, 1)

// 数据准备
onMounted(async () => {
  getRoleList.value = await getRoleListApi('all', getRoleListVO);
  getPermissionList.value = await getPermissionListApi();
})

const showDialogWithAddRole = () => {
  // 数据处理
  permissionList.value = [];
  addRoleTargetKeys.value = [];
  getPermissionList.value.data.forEach(it => {
    permissionList.value.push({
      key: it.name,
      title: it.name
    })
  })
  console.debug('[VIEW] ConsoleRole: 获取权限列表', getPermissionList)
  console.debug('[VIEW] ConsoleRole: 获取已选择的信息', addRoleTargetKeys)
  console.debug('[VIEW] ConsoleRole: 获取roleEditVO信息', getRoleEditVO)
  dialogAddRole.value = true;
}
const showDialogWithDeleteRole = deleteRoleUuid => {
  dialogDeleteRole.value = true;
  getDeleteRoleUuid.value = deleteRoleUuid;
}
const showDialogWithEditUser = (record) => {
  // 数据映射
  getRoleEditVO.uuid = record.uuid;
  getRoleEditVO.name = record.name;
  getRoleEditVO.displayName = record.displayName;
  // 数据处理
  permissionList.value = [];
  editRoleTargetKeys.value = [];
  getPermissionList.value.data.forEach(it => {
    permissionList.value.push({
      key: it.name,
      title: it.name
    })
  })
  // 穿梭框内容处理
  record.permission.forEach(it => {
    for (let i = 0; i < permissionList.value.length; i++) {
      if (permissionList.value[i].key === it) {
        editRoleTargetKeys.value.push(permissionList.value[i].key)
      }
    }
  })
  console.debug('[VIEW] ConsoleRole: 获取权限列表', getPermissionList)
  console.debug('[VIEW] ConsoleRole: 获取已选择的信息', editRoleTargetKeys)
  console.debug('[VIEW] ConsoleRole: 获取roleEditVO信息', getRoleEditVO)
  dialogEditRole.value = true;
}

const closeDialogRoleAdd = () => dialogAddRole.value = false;
const closeDialogRoleEdit = () => {
  dialogEditRole.value = false;
}
const closeDialogRoleDelete = () => dialogDeleteRole.value = false;

/**
 * 添加角色
 */
const consoleAddRole = async () => {
  // 数据准备
  getRoleAddVO.permission = addRoleTargetKeys.value;
  const getReturnData = await roleAddApi(getRoleAddVO);
  switch (getReturnData.output) {
    case "Success":
      getRoleList.value = await getRoleListApi('all', getRoleListVO);
      message.success("操作成功");
  }
  dialogAddRole.value = false;
}

/**
 * 角色编辑
 */
const consoleEditRole = async () => {
  // 数据准备
  getRoleAddVO.permission = editRoleTargetKeys.value;
  const getReturnData = await roleEditApi(getRoleEditVO);
  if (getReturnData.output === "Success") {
    getRoleList.value = await getRoleListApi('all', getRoleListVO);
    message.success("操作成功");
  }
  dialogEditRole.value = false
}

/**
 * 删除角色
 */
const consoleDeleteRole = async _ => {
  const getReturnData = await roleDeleteApi(getDeleteRoleUuid.value);
  if (getReturnData.output === "Success") {
    getRoleList.value = await getRoleListApi('all', getRoleListVO);
    message.success("操作成功");
  }
  dialogDeleteRole.value = false
}

function changeSelectRadio(type) {
  getSelectRadio.value = type;
}

/**
 * 获取 RoleList 函数
 * @param type
 */
async function getRoleListFunction(type) {
  changeSelectRadio(type);
  if (type === 'all') {
    getRoleList.value = await getRoleListApi('all', getRoleListVO)
  } else {
    getRoleList.value = await getRoleListApi('search', getRoleListVO)
  }
}

async function onSearch() {
  isSearchListView.value = true;
  getRoleList.value = await getRoleListApi('search', getRoleListVO);
}
</script>

<script>
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