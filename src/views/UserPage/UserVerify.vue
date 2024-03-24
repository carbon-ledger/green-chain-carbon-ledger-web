<template>
  <div class="container w-full">
    <div class="grid gap-3">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 text-xl">
          <CheckCircleTwoTone/>
          实名认证
        </div>
        <div class="col-span-12 px-3">
          <div class="container p-3">
            <div class="row-auto">
              <div class="" v-if="getQuery.edit === 'true' || getVerifyInfoVO.certificationStatus === 2">
                <EditVerify/>
              </div>
              <div class="div" v-else>
                <AddVerify v-if="getVerifyInfoVO.certificationStatus === -1"/>
                <VerifyInspection v-else-if="getVerifyInfoVO.certificationStatus === 0"/>
                <VerifyInfo v-else/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup>
import {
  CheckCircleTwoTone,
} from "@ant-design/icons-vue";
import AddVerify from "@/components/BackComponents/User/AddVerify.vue";
import {reviewGet} from "@/assets/js/PublishUtil.js";
import VerifyInspection from "@/components/BackComponents/User/VerifyInspection.vue";
import VerifyInfo from "@/components/BackComponents/User/VerifyInfo.vue";
import router from "@/router/index.js";
import EditVerify from "@/components/BackComponents/User/EditVerify.vue";

const getVerifyInfoVO = reviewGet();

// 获取 query 参数信息
const getQuery = router.currentRoute.value.query;
if (getQuery.edit === 'true') {
  getVerifyInfoVO.certificationStatus = '0';
}
</script>