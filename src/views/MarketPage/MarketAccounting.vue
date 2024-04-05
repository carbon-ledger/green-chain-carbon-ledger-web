<template>
  <div class="col-span-9">
    <a-card class="shadow-lg grid gap-3">
      <a-typography-title :level="3"><FileOutlined /> 核算信息</a-typography-title>
      <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
        <span>
          <SmileOutlined />
          Name
        </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
          </template>
          <template v-else-if="column.key === 'action'">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link">
            More actions
            <DownOutlined />
          </a>
        </span>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
  <div class="col-span-3">
    <a-card class="shadow-lg">
      <template #cover>
        <img alt="example" src="@/assets/images/market-user-background.webp"/>
      </template>
      <template #actions>
        <span @click="router.push({name: 'MarketDashboard'})"><UserOutlined /> 我的信息</span>
        <span @click=""><EditOutlined/>  创建核算</span>
      </template>
      <a-card-meta :description="getUserProfile.data.user.userName" :title="getUserProfile.data.user.realName">
        <template #avatar>
          <a-avatar :src="getUserAvatar"/>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {getUserCurrentApi} from "@/api/UserApi.js";
import {userCurrentDO} from "@/models/DoModel.js";
import {UserOutlined, EditOutlined, FileOutlined, SmileOutlined, DownOutlined} from "@ant-design/icons-vue"
import router from "@/router/index.js";

const getUserAvatar = ref('');
const getUserProfile = ref(userCurrentDO);

onMounted(async _ => {
  getUserProfile.value = await getUserCurrentApi();

  if (getUserProfile.value.output === 'Success') {
    if (getUserProfile.value.data.user.avatar === '') {
      getUserAvatar.value = getUserProfile.value.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
});
</script>

<script>
const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
</script>