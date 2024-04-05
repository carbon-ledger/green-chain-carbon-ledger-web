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
              <div v-if="isTheFirst">
                <div v-if="getQuery.edit === 'true' || getVerifyInfoVO.data.certificationStatus === 2">
                  <EditVerify v-if="getVerifyInfoVO.data.certificationStatus !== 0"/>
                  <VerifyInspection v-else-if="getVerifyInfoVO.data.certificationStatus === 0"/>
                </div>
                <div class="div" v-else>
                  <AddVerify v-if="getVerifyInfoVO.data.certificationStatus === -1"/>
                  <VerifyInspection v-else-if="getVerifyInfoVO.data.certificationStatus === 0"/>
                  <VerifyInfo v-else/>
                </div>
              </div>
              <AddVerify v-else/>
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
import AddVerify from "@/components/BackComponents/User/UserAddVerify.vue";
import VerifyInspection from "@/components/BackComponents/User/UserVerifyInspection.vue";
import VerifyInfo from "@/components/BackComponents/User/UserVerifyInfo.vue";
import router from "@/router/index.js";
import EditVerify from "@/components/BackComponents/User/UserEditVerify.vue";
import {onMounted, ref} from "vue";
import {reviewGetApi} from "@/api/ReviewApi.js";
import {organizeReviewDO} from "@/models/DoModel.js";

const getVerifyInfoVO = ref(organizeReviewDO);
const isTheFirst = ref(false);

// 获取 query 参数信息
const getQuery = router.currentRoute.value.query;
if (getQuery.edit === 'true') {
  getVerifyInfoVO.value.data.certificationStatus = '0';
}

onMounted(async _ => {
  getVerifyInfoVO.value = await reviewGetApi();
  await isTheFirstReview();
})

async function isTheFirstReview() {
  switch (getVerifyInfoVO.value.output) {
    case "Success":
      isTheFirst.value = true;
      break;
    case "ReviewError":
      isTheFirst.value = false;
      break;
    default:
      isTheFirst.value = false;
  }
}
</script>