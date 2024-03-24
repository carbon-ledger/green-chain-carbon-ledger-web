<template>
  <a-page-header
      sub-title="This is a subtitle"
      title="实名审核"
      @back="() => router.push('/dashboard/verify')"
  />
  <div class="w-full py-3 px-3 xxl:px-48">
    <a-card class="shadow flex justify-center">
      <div class="container w-full">
        <a-descriptions bordered title="待审核">
          <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
          <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Order time">2018-04-24 18:00:00</a-descriptions-item>
          <a-descriptions-item :span="2" label="Usage Time">2019-04-24 18:00:00</a-descriptions-item>
          <a-descriptions-item :span="3" label="Status">
            <a-badge status="processing" text="Running"/>
          </a-descriptions-item>
          <a-descriptions-item label="Negotiated Amount">$80.00</a-descriptions-item>
          <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
          <a-descriptions-item label="Official Receipts">$60.00</a-descriptions-item>
          <a-descriptions-item label="Config Info">
            Data disk type: MongoDB
            <br/>
            Database version: 3.4
            <br/>
            Package: dds.mongo.mid
            <br/>
            Storage space: 10 GB
            <br/>
            Replication factor: 3
            <br/>
            Region: East China 1
            <br/>
          </a-descriptions-item>
        </a-descriptions>
        <div class="justify-center flex space-x-5 mt-6">
          <a-button danger>拒绝</a-button>
          <a-button class="text-aspargus border-aspargus">通过</a-button>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup>
/*
 * 引入区
 */
import router from "@/router/index.js";
import {ref} from 'vue';

/*
 * 数据初始化区
 */
const value = ref('');

/*
 * 方法区
 */

</script>