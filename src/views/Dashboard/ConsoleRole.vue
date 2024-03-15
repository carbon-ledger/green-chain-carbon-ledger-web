<template>
  <div class="container p-3">
    <!--头部-->
    <div class="flex">
      <div class="w-36 ml-4 mt-4 flex">
        <a-input  class="h-8 border-gray-300 rounded-md"  placeholder="请输入角色id"/>
      </div>
      <div class="mt-4 flex">
        <a-button class="ml-4 mr-4 flex justify-center items-center" >
          <SearchOutlined/>
          查询
        </a-button>
        <a-button @click="showAddDiaLog" class="text-blue-50 bg-blue-500 flex justify-center items-center" type="primary">
          <PlusOutlined/>
          新增角色
        </a-button>
      </div>
    </div>
    <!--表格内容-->
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns"   :rowKey="record => record.id">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key==='id'">
            {{ record.id }}
          </template>
          <template v-else-if="column.key === 'enabled'">
            <a-tag v-if="record.enabled === true" :bordered="false" color="success">启用</a-tag>
            <a-tag v-if="record.enabled === false" :bordered="false" color="error">禁用</a-tag>
          </template>
          <template v-else-if="column.key==='createdAt'">
            {{ record.createdAt }}
          </template>
          <template v-else-if="column.key==='updateAt'">
            {{ record.updatedAt }}
          </template>
          <template v-else-if="column.key === 'isDelete'">
            {{ record.isDelete }}
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

    <!--新增角色对话框-->
    <a-modal v-model:open="AddDiaLog" :okButtonProps="{ style: { backgroundColor: '#347def',color: 'white'} }" cancel-text="取消" ok-text="确认" title="新增角色" >
      <div>
        <div class="ml-3 mt-6">角色名：<a-input v-model:value="addData.name" class="ml-[14px] h-8 w-1/2 border-gray-300 rounded-md"/></div>
        <div class="ml-3 mt-6">展示名字：<a-input v-model:value="addData.displayName" class="h-8 w-1/2 border-gray-300 rounded-md"/></div>
        <div class="ml-3 mt-6 mb-8">权限组：<a-input v-model:value="addData.permission" class="ml-[14px] h-8 w-1/2 border-gray-300 rounded-md"/></div>
      </div>
    </a-modal>

  </div>
</template>

<script setup>
import {SearchOutlined, PlusOutlined, EditOutlined,DeleteOutlined} from "@ant-design/icons-vue";
import {reactive, ref} from 'vue';

//新增角色对话框
const AddDiaLog = ref(false);
const addData = reactive({
  name:'',
  displayName:'',
  permission:''
})
function showAddDiaLog(){
  AddDiaLog.value = true;
  addData.name = '';
  addData.displayName = '';
}


//表格栏目
const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
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
    title: '拥有权限',
    dataIndex: 'enabled',
    key: 'enabled',
  },
  {
    title: '创建时间',
    key: 'createdAt',
    dataIndex: 'createdAt',
  },
  {
    title: '更新时间',
    key: 'updatedAt',
    dataIndex: 'updatedAt'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  },
];
</script>