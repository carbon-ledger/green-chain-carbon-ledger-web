<template>
  <div class="container w-full">
    <div class="grid gap-3">
      <div class="grid grid-cols-12 py-6 gap-3">
        <div class="col-span-2 flex items-center justify-center">
          <a-avatar alt="image description" class="rounded-full w-16 h-16" :src="getUserAvatar" :draggable="false" />
        </div>
        <div class="col-span-6 flex items-center">
          <div>
            <div class="text-2xl font-bold">{{ getUserProfile.data.user.realName }}</div>
            <div class="text-mount-pink">{{ getUserProfile.data.user.userName }} <{{ getUserProfile.data.user.email }}></div>
          </div>
        </div>
        <div class="col-span-4 grid grid-cols-2 gap-3 items-center">
          <a-button ghost type="primary">修改资料</a-button>
          <a-button ghost type="primary">返回主页</a-button>
        </div>
      </div>
      <hr/>
      <div class="grid grid-cols-12 py-6 gap-3">
        <div class="col-span-12 text-xl">
          <AppstoreTwoTone/>
          所有权限
        </div>
        <div class="col-span-12 grid px-6 gap-3">
          <a-list item-layout="horizontal">
            <a-list-item>
              <a-list-item-meta>
                <template #title>
                  <div class="grid">
                    <div>{{ getCurrentRole.data.displayName }}</div>
                    <div class="grid">
                      <div class="text-mount-pink">角色组名称：{{ getCurrentRole.data.name }}</div>
                      <div class="text-mount-pink">角色识别号：{{ getCurrentRole.data.uuid }}</div>
                    </div>
                  </div>
                </template>
                <template #avatar>
                  <img class="w-12 h-12 rounded-2xl" v-if="getCurrentRole.data.name === 'console'" src="@/assets/images/role-console.webp" alt="RoleList">
                  <img class="w-12 h-12 rounded-2xl" v-else-if="getCurrentRole.data.name === 'admin'" src="@/assets/images/role-admin.webp" alt="RoleList">
                  <img class="w-12 h-12 rounded-2xl" v-else-if="getCurrentRole.data.name === 'organize'" src="@/assets/images/role-organize.webp" alt="RoleList">
                  <img class="w-12 h-12 rounded-2xl" v-else-if="getCurrentRole.data.name === 'default'" src="@/assets/images/role-default.webp" alt="RoleList">
                  <img class="w-12 h-12 rounded-2xl" v-else src="@/assets/images/role-customize.webp" alt="RoleList">
                </template>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
          <a-table :columns="columns" :data-source="dataPermission.data">
            <template #headerCell="{ column }">
              <template v-if="column.key === 'name'">
                <span>
                  <KeyOutlined />
                  {{ column.name }}
                </span>
              </template>
              <template v-if="column.key === 'description'">
                <span>
                  <EditOutlined />
                  {{ column.name }}
                </span>
              </template>
            </template>

            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'name'">
                <a class="hover:text-spring">
                  {{ record.name }}
                </a>
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {AppstoreTwoTone} from "@ant-design/icons-vue";
import { KeyOutlined, EditOutlined} from '@ant-design/icons-vue';
import {onMounted, ref} from "vue";
import {getPermissionListApi} from "@/api/PermissionApi.js";
import {roleCurrentApi} from "@/api/RoleApi.js";
import {getRoleCurrentVO, userCurrentDO, permissionListDO} from "@/assets/js/DoModel.js";
import {getUserCurrentApi} from "@/api/UserApi.js";

const dataPermission = ref(permissionListDO);
const getCurrentRole = ref(getRoleCurrentVO);
const getUserProfile = ref(userCurrentDO);
const getUserAvatar = ref('');

onMounted(async _ => {
  getCurrentRole.value = await roleCurrentApi();
  dataPermission.value = await getPermissionListApi();
  getUserProfile.value = await getUserCurrentApi();
  if (getUserProfile.value.output === 'Success') {
    if (getUserProfile.value.data.user.avatar === "") {
      getUserAvatar.value = getUserProfile.value.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
})
</script>

<script>
const columns = [
  {
    name: '权限名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    name: '权限名称解释',
    dataIndex: 'description',
    key: 'description',
  }
];
</script>