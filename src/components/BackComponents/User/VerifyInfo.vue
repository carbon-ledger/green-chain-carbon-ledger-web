<template>
  <a-descriptions bordered title="状态：已认证" class="mb-3">
    <template #extra>
      <a-button class="bg-aspargus" type="primary" @click="clickLocation()">重新审核</a-button>
    </template>
    <a-descriptions-item span="2" label="组织名称">{{ getVerifyInfo.data.organizeName }}</a-descriptions-item>
    <a-descriptions-item span="2" label="信用代码">{{ getVerifyInfo.data.organizeCreditCode }}</a-descriptions-item>
    <a-descriptions-item span="2" label="注册资本">{{ getVerifyInfo.data.organizeRegisteredCapital }}</a-descriptions-item>
    <a-descriptions-item span="2" label="成立日期">{{ getVerifyInfo.data.organizeEstablishmentDate }}</a-descriptions-item>
    <a-descriptions-item span="2" label="法人姓名">{{ getVerifyInfo.data.legalRepresentativeName }}</a-descriptions-item>
    <a-descriptions-item span="2" label="身份证号">{{ getVerifyInfo.data.legalRepresentativeId }}</a-descriptions-item>
  </a-descriptions>
</template>

<script setup>
/*
 * 引入区
 */
import {reviewGet} from "@/assets/js/PublishUtil.js";
const getVerifyInfo = reviewGet()

function clickLocation() {
  window.location.replace('?edit=true')
}
</script>