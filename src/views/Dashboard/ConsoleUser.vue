<template>
  <a-page-header
      title="用户管理"
      sub-title="用户的添加、修改、删除等操作"
  />
  <div class="container px-3">
    <!--头部-->
    <div class="flex w-full justify-end">
      <div class="w-36 ml-4 mt-4 flex">
        <a-input  class="h-8 border-gray-300 rounded-md"  placeholder="请输入用户id"/>
      </div>
      <div class="mt-4 flex">
        <a-button class="ml-4 mr-4 flex justify-center items-center" >
          <SearchOutlined/>
          查询
        </a-button>
        <a-button @click="showAddDiaLog" class="bg-aspargus flex justify-center items-center" type="primary">
          <PlusOutlined/>
          新增用户
        </a-button>
      </div>
    </div>
    <!--表格内容-->
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns" :data-source="UserList.value"  :rowKey="record => record.id">
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
          <template v-else-if="column.key==='action'">
            <span style="margin-left: 10px; display: flex">
              <a-button class="text-blue-500 flex justify-center items-center" size="small" type="text"><EditOutlined/>修改</a-button>
              <a-button class="text-blue-500 flex justify-center items-center" size="small" type="text"><DeleteOutlined/>删除</a-button>
            </span>
          </template>
        </template>
      </a-table>
    </div>

    <!--新增用户对话框-->
    <a-modal v-model:open="AddDiaLog" :okButtonProps="{ style: { backgroundColor: '#77AD78'}}" cancel-text="取消" ok-text="确认" title="新增角色" >
      <div>
        <div class="ml-3 mt-6">用户名：<a-input v-model:value="addData.username" class="ml-[14px] h-8 w-1/2 border-gray-300 rounded-md"/></div>
        <div class="ml-3 mt-6">真实姓名：<a-input v-model:value="addData.realname" class="h-8 w-1/2 border-gray-300 rounded-md"/></div>
        <div class="ml-3 mt-6">手机号：<a-input v-model:value="addData.phone" class="ml-[14px] h-8 w-1/2 border-gray-300 rounded-md"/></div>
        <div class="ml-3 mt-6 mb-8">邮箱：<a-input v-model:value="addData.email" class="ml-[28px] h-8 w-1/2 border-gray-300 rounded-md"/></div>
      </div>
    </a-modal>
  </div>
</template>

<script setup>
import {SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons-vue";
import {onMounted, reactive, ref} from 'vue';
import request from "@/assets/js/request.js";

//新增用户对话框
const AddDiaLog = ref(false);
const addData = reactive({
  username:'',
  realname:'',
  phone:'',
  email:''
})
function showAddDiaLog(){
  AddDiaLog.value = true;
  addData.name = '';
  addData.displayName = '';
}

//获取用户
const data = {
  type: 'all',
}
const UserList = ref([]);

onMounted(() => {
  request.getUserList(data).then((res) => {
      UserList.value = res.date.data
    console.log(UserList.value)
  })
})





//表格栏目
const columns = [
  {
    title: '序号',
    dataIndex: 'uuid',
    key: 'uuid',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '真实姓名',
    dataIndex: 'realname',
    key: 'realname',
  },
  {
    title: '邮箱',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  },
];
</script>