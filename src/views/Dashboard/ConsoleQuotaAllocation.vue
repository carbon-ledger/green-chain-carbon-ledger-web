<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="配额管理"
  >
    <a-descriptions-item>
      <div class="text-mount-pink">
        配额管理，由拥有对应权限的账户进行对组织账户的配额进行分配管理，主要用于分配今年还未处理的配额。
      </div>
    </a-descriptions-item>
  </a-page-header>
  <div class="px-3">
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns" :data-source="getCarbonOperateList.data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'userName'">{{ record.userName }}</template>
          <template v-if="column.key === 'realName'">{{ record.realName }}</template>
          <template v-if="column.key === 'email'">{{ record.email }}</template>
          <template v-if="column.key === 'action'">
            <a-button type="link"
                      @click="() => {
                        openModel = true;
                        sendOrganizeUUID = record.uuid;
                      }"
                      class="text-aspargus">
              配额分配
            </a-button>
          </template>
        </template>
      </a-table>
    </div>
  </div>

  <template>
    <a-modal v-model:open="openModel" title="配额管理">
      <template #footer>
        <a-button key="submit" @click="() => openModel = false">取消</a-button>
        <a-button key="submit" type="primary" class="bg-aspargus" @click="consoleSendCarbonAdd()">确定</a-button>
      </template>
      <div>
        <a-form
            :model="formState"
            name="basic"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 16 }"
        >
          <a-form-item
              label="配额"
              name="quota"
              :rules="[{ required: true, message: '请输入配额数' }]"
          >
            <a-input v-model:value="formState.quota" type="number">
              <template #suffix>吨</template>
            </a-input>
          </a-form-item>
          <a-form-item
              label="状态"
              name="status"
              :rules="[{ required: true, message: '是否合规' }]"
          >
            <a-select
                v-model:value="formState.status"
                :options="options"
                placeholder="选择是否合规"
            ></a-select>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </template>
</template>

<script setup>
import {breadcrumbs} from "@/utils/DashboardBreadCrumb.js";
import {onMounted, reactive, ref} from "vue";
import {carbonOperateListDO} from "@/assets/js/DoModel.js";
import {carbonAdd, carbonOperateList} from "@/api/CarbonApi.js";
import {sendCreateOrganizeQuotaVO} from "@/assets/js/VoModel.js";
import {message} from "ant-design-vue";

const routes = breadcrumbs;
const openModel = ref(false)
const formState = reactive(sendCreateOrganizeQuotaVO);
const sendOrganizeUUID = ref("");
const options = [{value: true, label: "合规"}, {value: false, label: "不合规"}]
const getCarbonOperateList = ref(carbonOperateListDO)

onMounted(async _ => {
  getCarbonOperateList.value = await carbonOperateList()
})

breadcrumbs.push({breadcrumbName: '配额管理'});
setTimeout(() => {
  breadcrumbs.pop();
}, 1)

async function consoleSendCarbonAdd() {
  // 对接口进行操作
  const getReturnData = await carbonAdd(formState, sendOrganizeUUID.value);
  if (getReturnData.output === "Success") {
    message.success("操作成功");
    getCarbonOperateList.value = await carbonOperateList();
    openModel.value = false;
  }
}
</script>

<script>
const columns = [
  {
    title: '用户名',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '真实信息',
    dataIndex: 'realName',
    key: 'realName',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  }
]
</script>