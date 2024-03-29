<template>
  <div class="container w-full">
    <div class="grid gap-3">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 grid gap-1 mb-3">
          <a-typography-title :level="2" class="text-center">账户注销说明书</a-typography-title>
          <a-typography-title :level="3">注意事项</a-typography-title>
          <a-typography-text>
            <ul>
              <li>账户注销是一个不可逆的过程。一旦账户被注销，所有相关数据将会被冻结；</li>
              <li>账户数据会进行保留，保证交易链信息有效，但任何用户无法再对此账户进行任何操作；</li>
              <li>注销前，请确保已导出或备份所有重要数据和信息。</li>
            </ul>
          </a-typography-text>
          <a-typography-title :level="3">重要提醒</a-typography-title>
          <a-typography-text>
            <ul>
              <li><b>财务清算</b>：确保完成所有待处理的交易和财务清算。未解决的财务事务可能会影响账户的注销过程。</li>
              <li><b>审批流程</b>：部分账户类型（如组织账户）的注销需经过管理员审批。请按照指定流程提交注销申请。</li>
            </ul>
          </a-typography-text>
          <a-typography-title :level="3">完成注销</a-typography-title>
          <a-typography-text>
            注销完成后，您将无法使用该账户登录绿链碳账本平台。您将通过电子邮件收到注销确认通知。
          </a-typography-text>
          <a-typography-title :level="3">需要帮助？</a-typography-title>
          <a-typography-text>
            如果您在注销过程中遇到任何问题，或需要进一步的帮助，请不要犹豫，通过以下方式联系我们的客户支持团队：
            <ul>
              <li>电子邮件：support@greenchain.com</li>
              <li>客服热线：123-456-7890</li>
            </ul>
          </a-typography-text>
          <hr class="mb-3"/>
          <a-typography-title :level="3">常见问题解答</a-typography-title>
          <a-typography-text>
            <b>Q: 注销账户后，我的数据会保留多久？</b><br/>
            A: 为了保证您之前的交易与其他组织进行交易的交易链有效，交易数据会永久保留。
          </a-typography-text>
          <a-typography-text>
            <b>Q: 如果我改变主意，可以撤销注销申请吗？</b><br/>
            A: 注销账户后，您的注销信息会被保留7天时间。在此期间，您可以重新登陆账户即可取消注销。如果时间超过7天，则账户进入永久注销，数据将会冻结处理。
          </a-typography-text>
        </div>
        <div class="col-span-12 grid justify-center">
          <a-button danger @click="showModal">确认注销</a-button>
        </div>
      </div>
    </div>

    <div>
      <a-modal v-model:open="open" title="您真的要注销吗？">
        <div class="grid gap-3 pb-3">
          <a-typography-text>您确认您的账户需要进行注销，请务必查阅账户注销说明书后再进行！</a-typography-text>
          <div class="grid gap-1">
            <a-typography-text>
              <MailOutlined/>
              邮箱 <span class="text-red-600">*</span></a-typography-text>
            <a-input v-model:value="sendCodeDataForm.email" disabled>
              <template #suffix/>
            </a-input>
          </div>
          <div class="grid gap-1">
            <a-typography-text>
              <KeyOutlined/>
              密码 <span class="text-red-600">*</span></a-typography-text>
            <a-input-password id="inputPassword" v-model:value="userDeleteForm.password" placeholder="您的密码"/>
          </div>
          <div class="grid gap-1">
            <a-typography-text>
              <NumberOutlined/>
              邮箱验证码 <span class="text-red-600">*</span></a-typography-text>
            <a-input v-model:value="userDeleteForm.code" placeholder="验证码">
              <template #suffix>
                <a-button id="inputCode" class="text-aspargus hover:text-spring" size="small" type="link"
                          @click="sendMail(sendCodeDataForm)">发送验证码
                </a-button>
              </template>
            </a-input>
          </div>
        </div>
        <template #footer>
          <a-button id="checkButton" danger @click="handleOk">确认</a-button>
          <a-button id="cancelButton" class="text-aspargus border-aspargus" @click="closeModal">取消</a-button>
        </template>
      </a-modal>
    </div>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue';
import {message} from "ant-design-vue";
import {KeyOutlined, MailOutlined, NumberOutlined} from "@ant-design/icons-vue";
import {userCurrentDO} from "@/assets/js/DoModel.js";
import {getUserCurrentApi} from "@/api/UserApi.js";
import {sendCodeMailApi} from "@/api/MailApi.js";
import {sendMailVO, userDeleteVO} from "@/assets/js/VoModel.js";
import {userDeleteApi, userLogoutApi} from "@/api/AuthApi.js";


const openNoti = ref(false);
const userDeleteForm = reactive(userDeleteVO)
const sendCodeDataForm = reactive(sendMailVO);
const getUserCurrent = ref(userCurrentDO);


onMounted(async _ => {
  getUserCurrent.value = await getUserCurrentApi();
  userDeleteForm.email = getUserCurrent.value.data.user.email;
  sendCodeDataForm.email = getUserCurrent.value.data.user.email;
})

const showModal = () => open.value = true;
const closeModal = () => open.value = false;

async function handleOk() {
  document.getElementById("checkButton").setAttribute("disabled", true)
  document.getElementById("checkButton").innerText = "注销中..."
  document.getElementById("cancelButton").setAttribute("disabled", true)
  const returnData = await userDeleteApi(userDeleteForm);
  if (returnData.output === "Success") {
    message.success("账户注销成功！");
    const returnDataWithLoginOut = await userLogoutApi();
    if (returnDataWithLoginOut.output === "Success") {
      localStorage.removeItem("AuthorizationToken");
      localStorage.removeItem("X-Auth-UUID");
      setTimeout(() => {
        window.location.href = "/"
      }, 1000)
    }
  } else {
    setTimeout(() => {
      document.getElementById("checkButton").innerText = "确认"
      document.getElementById("checkButton").removeAttribute("disabled")
      document.getElementById("cancelButton").removeAttribute("disabled")
    }, 100)
  }
}

async function sendMail(sendCodeData) {
  sendCodeData.template = 'user-delete';
  const getReturnData = await sendCodeMailApi(sendCodeData);
  if (getReturnData.output === 'Success') {
    message.success("验证码发送成功，请查阅邮箱")
    await countDown(new Date().getTime() + 120000)
    document.getElementById('inputCode').disabled = true;
  }
}

function addZero(i) {
  return i < 10 ? "0" + i : i + "";
}

async function countDown(endTime) {
  const now = new Date().getTime();
  const leftTime = parseInt((endTime - now) / 1000);

  if (leftTime > 0) {
    document.getElementById('inputCode').innerText = addZero(leftTime) + '秒后重发';
  } else {
    document.getElementById('inputCode').disabled = false;
    document.getElementById('inputCode').innerText = '获取验证码';
  }
  setTimeout(function () {
    countDown(endTime);
  }, 1000);
}
</script>