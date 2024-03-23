<template>
  <div class="container w-full">
    <div class="grid gap-3">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 text-xl"><CheckCircleTwoTone /> 实名认证</div>
        <div class="col-span-12 px-3 md:px-10 lg:px-20 xl:px-40">
          <div class="container p-3">
            <div class="row-auto">
              <a-form
                  :model="verifyForm"
                  name="basic"
                  :label-col="{ span: 6 }"
                  autocomplete="off"
              >
                <a-form-item
                    label="组织名称"
                    name="realname"
                    :rules="[{ required: true, message: '请输入组织名称！' }]"
                >
                  <a-input v-model:value="verifyForm.organizeName">
                    <template #prefix>
                      <HomeOutlined class="site-form-item-icon"/>
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item
                    label="组织信用代码"
                    name="realname"
                    :rules="[{ required: true, message: '请输入组织信用代码！' }]"
                >
                  <a-input v-model:value="verifyForm.creditCode">
                    <template #prefix>
                      <CheckCircleOutlined class="site-form-item-icon"/>
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item
                    label="注册资本"
                    name="realname"
                    :rules="[{ required: true, message: '请输入注册资本！' }]"
                >
                  <a-input v-model:value="verifyForm.registeredCapital">
                    <template #prefix>
                      <DollarCircleOutlined class="site-form-item-icon"/>
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item
                    label="组织成立日期"
                    name="realname"
                    :rules="[{ required: true, message: '请输入组织成立日期！' }]"
                >
                  <a-input v-model:value="verifyForm.establishmentDate">
                    <template #prefix>
                      <CalendarOutlined class="site-form-item-icon"/>
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item
                    label="法人姓名"
                    name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                  <a-input v-model:value="verifyForm.legalRepresentativeName">
                    <template #prefix>
                      <UserOutlined class="site-form-item-icon"/>
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item
                    label="法人身份证号"
                    name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                  <a-input v-model:value="verifyForm.legalRepresentativeId">
                    <template #prefix>
                      <NumberOutlined class="site-form-item-icon"/>
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item
                    label="法人身份证正面照"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                  <a-upload v-model="verifyForm.legalIdCardFront" action="/upload.do" list-type="picture-card">
                    <div>
                      <PlusOutlined />
                      <div style="margin-top: 8px">上传</div>
                    </div>
                  </a-upload>
                </a-form-item>
                <a-form-item
                    label="法人身份证照反面"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                  <a-upload v-model="verifyForm.legalIdCardBack" action="/upload.do" list-type="picture-card">
                    <div>
                      <PlusOutlined />
                      <div style="margin-top: 8px">上传</div>
                    </div>
                  </a-upload>
                </a-form-item>
                <a-form-item
                    label="营业执照图片"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                  <a-upload v-model="verifyForm.license" action="/upload.do" list-type="picture-card">
                    <div>
                      <PlusOutlined />
                      <div style="margin-top: 8px">上传</div>
                    </div>
                  </a-upload>
                </a-form-item>
                <a-form-item
                    label="备注内容"
                    name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                  <a-input v-model:value="verifyForm.remark">
                    <template #prefix>
                      <MoreOutlined class="site-form-item-icon"/>
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item class="text-center">
                  <a-button type="primary" class="bg-aspargus">认证</a-button>
                </a-form-item>
              </a-form>
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
  UserOutlined,
  NumberOutlined ,
  PlusOutlined,
  HomeOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
  MoreOutlined} from "@ant-design/icons-vue";
import {reactive} from "vue";

const verifyForm = reactive({
  organizeName:'',
  creditCode:'',
  license:'',
  registeredCapital:'',
  establishmentDate:'',
  legalRepresentativeName:'',
  legalRepresentativeId:'',
  legalIdCardFront:'',
  legalIdCardBack:'',
  remark:'',
})
</script>