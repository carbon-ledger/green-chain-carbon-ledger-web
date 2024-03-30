<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="网站设置"
  >
    <a-descriptions-item>
      <div class="text-mount-pink">
        账户管理，包括账户的增删改查，账户的状态，账户的创建时间，账户的更新时间，账户是否已被删除等。
      </div>
    </a-descriptions-item>
  </a-page-header>
  <div class="grid grid-cols-12 p-3">
    <div class="col-span-12">
      <a-card class="shadow-lg p-10">
        <a-form
            v-model="webform"
            :label-col="{ span: 4 }"
            class="grid grid-cols-12 gap-10"
            name="basic"
        >
          <a-form-item
              class="col-span-6"
              label="网站全称"
              name="organizeName"
          >
            <a-input  v-model:value="webform.fullname">
              <template #prefix>
                <AlignCenterOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="网站简称"
              name="creditCode"
          >
            <a-input v-model:value="webform.shortname">
              <template #prefix>
                <BorderHorizontalOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              label="网站LOGO"
              class="col-span-6"
          >
            <a-upload  v-model:file-list="logo" action="/upload.do" list-type="picture-card"/>
          </a-form-item>
          <a-form-item
              label="网站宣传图片"
              class="col-span-6"
          >
            <a-upload  v-model:file-list="img" action="/upload.do" list-type="picture-card">
              <div>
                <div style="margin-top: 8px">上传</div>
              </div>
            </a-upload>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="SEO标题"
              name="legalRepresentativeName"
          >
            <a-input v-model:value="webform.seotitle">
              <template #prefix>
                <HolderOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="SEO描述"
              name="legalRepresentativeId"
          >
            <a-textarea v-model:value="webform.seodescription">
              <template #prefix>
                <SmallDashOutlined class="site-form-item-icon"/>
              </template>
            </a-textarea>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="网站关键词"
              name="legalRepresentativeId"
          >
            <a-textarea v-model:value="webform.keywords">
              <template #prefix>
                <BarsOutlined class="site-form-item-icon"/>
              </template>
            </a-textarea>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="网站描述"
              name="legalRepresentativeId"
          >
            <a-textarea v-model:value="webform.webdecription">
              <template #prefix>
                <MoreOutlined class="site-form-item-icon"/>
              </template>
            </a-textarea>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="网站网址"
              name="legalRepresentativeId"
          >
            <a-input v-model:value="webform.webaddress">
              <template #prefix>
                <LinkOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="网站QQ"
              name="legalRepresentativeId"
          >
            <a-input v-model:value="webform.qq">
              <template #prefix>
                <QqOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="网站邮箱"
              name="legalRepresentativeId"
          >
            <a-input v-model:value="webform.phone">
              <template #prefix>
                <MailOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="网站电话"
              name="legalRepresentativeId"
          >
            <a-input v-model:value="webform.phone">
              <template #prefix>
                <PhoneOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="公司地址"
              name="legalRepresentativeId"
          >
            <a-input v-model:value="webform.address">
              <template #prefix>
                <EnvironmentOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="传真"
              name="legalRepresentativeId"
          >
            <a-input v-model:value="webform.fax">
              <template #prefix>
                <NumberOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <div class="col-span-12 text-center">
            <a-button class="bg-aspargus" type="primary">保存更改</a-button>
          </div>
        </a-form>
      </a-card>
    </div>
  </div>
</template>
<script setup>
import {
  AlignCenterOutlined,
  BorderHorizontalOutlined,
  HolderOutlined,
  NumberOutlined,
  SmallDashOutlined,
  BarsOutlined,
  EnvironmentOutlined,
  LinkOutlined,
  QqOutlined,
  PhoneOutlined,
  MailOutlined,
  MoreOutlined,
} from "@ant-design/icons-vue";
import {reactive, ref} from "vue";

const webform = reactive({
  fullname:'绿链碳账本',
  shortname:'绿链碳',
  seotitle:'绿链碳|基于区块链的碳排放碳交易系统',
  seodescription:'绿链碳：基于区块链技术的碳排放与交易平台，旨在提升碳减排效率与透明度。助力企业和个人实现环保目标，推动可持续发展。加入我们，共建绿色未来。',
  keywords:'绿链碳  碳核算  碳交易  碳排放',
  qq:'2967683345',
  email:'2967683345@qq.com',
  phone:'13981765149',
  address:'广东省深圳市',
  fax:'028-84462037',
  webaddress:'www.green-chain-carbon',
  webdecription:'基于区块链的碳核算和碳排放系统'
})

const logo = ref([
  {
    uid: '-1',
    name: 'image.jpg',
    status: 'done',
    url: '/favicon.ico',
  },
])

const img = ref([
  {
    uid: '-1',
    name: 'image.jpg',
    status: 'done',
    url: '/favicon.ico',
  },
])
</script>