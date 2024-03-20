<template>
  <div class="container w-full">
    <div class="grid gap-3">
      <div class="grid grid-cols-12 py-6 gap-3">
        <div class="col-span-2 flex items-center justify-center">
          <img alt="image description" class="rounded-full w-16 h-16" src="@/assets/images/user-icon.png">
        </div>
        <div class="col-span-6 flex items-center">
          <div>
            <div class="text-2xl font-bold">{{ getUserVO.user.realName }}</div>
            <div class="text-mount-pink">{{ getUserVO.user.userName }} <{{ getUserVO.user.email }}></div>
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
                    <div>{{ dataRole.displayName }}</div>
                    <div class="grid">
                      <div class="text-mount-pink">角色组名称：{{ dataRole.name }}</div>
                      <div class="text-mount-pink">角色识别号：{{ dataRole.uuid }}</div>
                    </div>
                  </div>
                </template>
                <template #avatar>
                  <img class="w-12 h-12 rounded-2xl" v-if="dataRole.name === 'console'" src="@/assets/images/role-console.webp" alt="RoleList">
                  <img class="w-12 h-12 rounded-2xl" v-else-if="dataRole.name === 'admin'" src="@/assets/images/role-admin.webp" alt="RoleList">
                  <img class="w-12 h-12 rounded-2xl" v-else-if="dataRole.name === 'organize'" src="@/assets/images/role-organize.webp" alt="RoleList">
                  <img class="w-12 h-12 rounded-2xl" v-else-if="dataRole.name === 'default'" src="@/assets/images/role-default.webp" alt="RoleList">
                  <img class="w-12 h-12 rounded-2xl" v-else src="@/assets/images/role-customize.webp" alt="RoleList">
                </template>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
          <a-table :columns="columns" :data-source="dataPermission">
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
import {getPermissionList, getRoleCurrent, getUserCurrent} from "@/assets/js/PublishUtil.js";

let getUserVO = getUserCurrent()

import { KeyOutlined, EditOutlined} from '@ant-design/icons-vue';
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

const dataPermission = getPermissionList();

let dataRole = getRoleCurrent()
</script>