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
          <a-descriptions-item label="账户名称">{{ reviewForm.data.account.userName }}</a-descriptions-item>
          <a-descriptions-item label="真实信息">{{ reviewForm.data.account.realName }}</a-descriptions-item>
          <a-descriptions-item label="账户邮箱">{{ reviewForm.data.account.email }}</a-descriptions-item>
          <a-descriptions-item :span="2" label="组织名称">{{ reviewForm.data.organizeName }}</a-descriptions-item>
          <a-descriptions-item label="组织信用代码">{{ reviewForm.data.organizeCreditCode }}</a-descriptions-item>
          <a-descriptions-item label="注册资本">{{
              reviewForm.data.organizeRegisteredCapital
            }}万人民币
          </a-descriptions-item>
          <a-descriptions-item label="注册时间">
            {{ moment(reviewForm.data.organizeEstablishmentDate).format('yyyy年MM月DD日') }}
          </a-descriptions-item>
          <a-descriptions-item label="申请时间">{{
              moment(reviewForm.data.applyTime).format('yyyy年MM月DD日 hh时')
            }}
          </a-descriptions-item>
          <a-descriptions-item label="组织法人">{{ reviewForm.data.legalRepresentativeName }}</a-descriptions-item>
          <a-descriptions-item :span="2" label="法人身份证号">{{
              reviewForm.data.legalRepresentativeId
            }}
          </a-descriptions-item>
          <a-descriptions-item :span="3" label="组织营业执照">
            <a-image
                :src="api + '/image/license/' + reviewForm.data.organizeLicenseUrl"
                :width="200"
            />
          </a-descriptions-item>
          <a-descriptions-item :span="3" label="法人身份证正面照">
            <a-image
                :src="api + '/image/legal/front/' + reviewForm.data.legalIdCardFrontUrl"
                :width="200"
            />
          </a-descriptions-item>
          <a-descriptions-item :span="3" label="法人身份证反面照">
            <a-image
                :src="api + '/image/legal/back/' + reviewForm.data.legalIdCardBackUrl"
                :width="200"
            />
          </a-descriptions-item>
        </a-descriptions>
        <div class="justify-center flex space-x-5 mt-6">
          <a-button danger @click="showModal">拒绝</a-button>
          <a-button class="text-aspargus border-aspargus" @click="organizationalReview(true)">通过</a-button>
        </div>
      </div>
    </a-card>
  </div>

  <a-modal
      v-model:open="open"
      :confirm-loading="confirmLoading"
      title="拒绝理由"
      @ok="organizationalReview(false)"
  >
    <template #footer>
      <a-button class="text-aspargus border-aspargus" @click="organizationalReview(false)">确认</a-button>
      <a-button danger @click="closeModal">取消</a-button>
    </template>
    <a-typography-paragraph>请填写具体拒绝理由</a-typography-paragraph>
    <a-textarea
        v-model:value="getReviewCheckVO.remark"
        :auto-size="{ minRows: 2, maxRows: 5 }"
        placeholder="如：身份证与法人信息不符合；您的组织不符合审核要求"
    />
  </a-modal>
</template>

<script setup>
/*
 * 引入区
 */
import router from "@/router/index.js";
import moment from "moment";
import {api} from "@/assets/js/Request.js";
import {reviewCheckVO} from "@/assets/js/VoModel.js";
import {onMounted, reactive, ref} from "vue";
import {message} from "ant-design-vue";
import {reviewCheckOrganizeApi, reviewGetConsoleCheck} from "@/api/ReviewApi.js";
import {baseResponse, reviewCheckConsoleDO} from "@/assets/js/DoModel.js";

/*
 * 数据初始化区
 */
const reviewForm = ref(reviewCheckConsoleDO);
let getReviewCheckVO = reactive(reviewCheckVO)
const openNoti = ref(false);
const confirmLoading = ref(false);

onMounted(async _ => {
  reviewForm.value = await reviewGetConsoleCheck(router.currentRoute.value.query.id, router.currentRoute.value.query.type);
  await isTheReviewExist(reviewForm);
})

/*
 * 方法区
 */
const showModal = () => open.value = true;
const closeModal = () => open.value = false;

async function isTheReviewExist(value) {
  if (value.value.output !== "Success") {
    await router.push({name: 'DashboardVerify'})
  }
}

async function organizationalReview(check) {
  let getReturnData = reactive(baseResponse);
  confirmLoading.value = true
  getReviewCheckVO.allow = check
  console.log(getReviewCheckVO);
  if (check) {
    getReturnData = await reviewCheckOrganizeApi(getReviewCheckVO, router.currentRoute.value.query.id);
  } else {
    if (getReviewCheckVO.remark === null || getReviewCheckVO.remark === '' || getReviewCheckVO.remark === undefined) {
      message.warn("请填写拒绝原因")
      return
    }
    getReturnData = await reviewCheckOrganizeApi(getReviewCheckVO, router.currentRoute.value.query.id);
    closeModal()
  }
  if (getReturnData.output === 'Success') {
    message.success("操作成功");
    setTimeout(_ => {
      router.push({name: 'DashboardVerify'});
    }, 500);
  }
}
</script>