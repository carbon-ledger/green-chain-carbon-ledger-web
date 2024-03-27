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
          <a-descriptions-item label="账户名称">{{ userDeleteForm.userChangePassword.account.userName }}</a-descriptions-item>
          <a-descriptions-item label="真实信息">{{ userDeleteForm.userChangePassword.account.realName }}</a-descriptions-item>
          <a-descriptions-item label="账户邮箱">{{ userDeleteForm.userChangePassword.account.email }}</a-descriptions-item>
          <a-descriptions-item :span="2" label="组织名称">{{ userDeleteForm.userChangePassword.organizeName }}</a-descriptions-item>
          <a-descriptions-item label="组织信用代码">{{ userDeleteForm.userChangePassword.organizeCreditCode }}</a-descriptions-item>
          <a-descriptions-item label="注册资本">{{
              userDeleteForm.userChangePassword.organizeRegisteredCapital
            }}万人民币
          </a-descriptions-item>
          <a-descriptions-item label="注册时间">
            {{ moment(userDeleteForm.userChangePassword.organizeEstablishmentDate).format('yyyy年MM月DD日') }}
          </a-descriptions-item>
          <a-descriptions-item label="申请时间">{{
              moment(userDeleteForm.userChangePassword.applyTime).format('yyyy年MM月DD日 hh时')
            }}
          </a-descriptions-item>
          <a-descriptions-item label="组织法人">{{ userDeleteForm.userChangePassword.legalRepresentativeName }}</a-descriptions-item>
          <a-descriptions-item :span="2" label="法人身份证号">{{
              userDeleteForm.userChangePassword.legalRepresentativeId
            }}
          </a-descriptions-item>
          <a-descriptions-item :span="3" label="组织营业执照">
            <a-image
                :src="api + '/image/license/' + getData.data.organizeLicenseUrl"
                :width="200"
            />
          </a-descriptions-item>
          <a-descriptions-item :span="3" label="法人身份证正面照">
            <a-image
                :src="api + '/image/legal/front/' + getData.data.legalIdCardFrontUrl"
                :width="200"
            />
          </a-descriptions-item>
          <a-descriptions-item :span="3" label="法人身份证反面照">
            <a-image
                :src="api + '/image/legal/back/' + getData.data.legalIdCardBackUrl"
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
import {reviewCheckOrganizeRequest, reviewGetAdminRequest} from "@/assets/js/PublishUtil.js";
import moment from "moment";
import {api} from "@/assets/js/Request.js";
import {ReviewCheckVO} from "@/assets/js/VoModel.js";
import {reactive, ref, watch} from "vue";
import {message} from "ant-design-vue";

/*
 * 数据初始化区
 */
const userDeleteForm = reviewGetAdminRequest(router.currentRoute.value.query.id, router.currentRoute.value.query.type);
let getReviewCheckVO = reactive(ReviewCheckVO)
const open = ref(false);
const confirmLoading = ref(false);
let getReturnData = undefined;

/*
 * 方法区
 */
const showModal = () => open.value = true;
const closeModal = () => open.value = false;

watch(getData, (newValue) => {
  console.log(newValue);
  if (newValue.output !== "Success") {
    router.push({name: 'DashboardVerify'})
  }
})

function organizationalReview(check) {
  confirmLoading.value = true
  getReviewCheckVO.allow = check
  if (check) {
    getReturnData = reviewCheckOrganizeRequest(router.currentRoute.value.query.id, getReviewCheckVO);
  } else {
    if (getReviewCheckVO.remark === null || getReviewCheckVO.remark === '' || getReviewCheckVO.remark === undefined) {
      message.warn("请填写拒绝原因")
      return
    }
    getReturnData = reviewCheckOrganizeRequest(router.currentRoute.value.query.id, getReviewCheckVO);
    closeModal()
  }
  // 处理判断数据
  console.debug('[ConsoleUserVerifyCheck] `getReturnData`:', getReturnData)
}

watch(getReturnData, (newValue) => {c
  console.log('[ConsoleUserVerifyCheck] 监听器 `getReturnData`:', newValue);
  switch (newValue.value.output) {
    case "Success":
      message.success("操作成功");
      setTimeout(() => {
        router.replace({name: 'DashboardVerify'});
      }, 500);
  }
})
</script>