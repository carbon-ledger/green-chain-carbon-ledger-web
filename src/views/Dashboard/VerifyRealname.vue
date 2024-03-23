
<template>
  <a-page-header
      sub-title="This is a subtitle"
      @back="() => router.replace('/dashboard/verify-realname/')"
      title="实名审核"
  />
  <div class="sm:px-10 md:px-10 lg:px-20 xl:px-30 2xl:px-30 py-6">
    <div class="col-span-4 md:col-span-3">
      <a-card class="shadow-md">
        <div class="container w-full">
            <a-descriptions title="User Info" bordered>
              <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
              <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
              <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
              <a-descriptions-item label="Order time">2018-04-24 18:00:00</a-descriptions-item>
              <a-descriptions-item label="Usage Time" :span="2">2019-04-24 18:00:00</a-descriptions-item>
              <a-descriptions-item label="Status" :span="3">
                <a-badge status="processing" text="Running" />
              </a-descriptions-item>
              <a-descriptions-item label="Negotiated Amount">$80.00</a-descriptions-item>
              <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
              <a-descriptions-item label="Official Receipts">$60.00</a-descriptions-item>
              <a-descriptions-item label="Config Info">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
                <br />
              </a-descriptions-item>
            </a-descriptions>
          <div class="justify-center flex space-x-5 mt-6">
            <a-button class="bg-aspargus" type="primary">通过</a-button>
            <a-button>拒绝</a-button>
          </div>
          </div>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import router from "@/router/index.js";
import {ref} from 'vue';
import {SafetyOutlined, SearchOutlined} from "@ant-design/icons-vue";
const value = ref('');

</script>