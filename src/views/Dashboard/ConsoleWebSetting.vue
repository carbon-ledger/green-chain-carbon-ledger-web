<template>
  <div class="grid grid-cols-12 p-16">
    <div class="col-span-12">
      <a-card class="shadow-lg p-10">
        <a-form
            :label-col="{ span: 4 }"
            class="grid grid-cols-12 gap-10"
            name="basic"
        >
          <a-form-item
              class="col-span-6"
              label="网站全称"
              name="organizeName"
          >
            <a-input>
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
            <a-input >
              <template #prefix>
                <BorderHorizontalOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              label="网站LOGO"
              class="col-span-6"
          >
            <a-upload action="/upload.do" list-type="picture-card">
              <div>
                <div style="margin-top: 8px">上传</div>
              </div>
            </a-upload>
          </a-form-item>
          <a-form-item
              label="网站宣传图片"
              class="col-span-6"
          >
            <a-upload action="/upload.do" list-type="picture-card">
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
            <a-input >
              <template #prefix>
                <UnorderedListOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="SEO描述"
              name="legalRepresentativeId"
          >
            <a-input >
              <template #prefix>
                <SmallDashOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="网站关键词"
              name="legalRepresentativeId"
          >
            <a-input >
              <template #prefix>
                <BarsOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="网站网址"
              name="legalRepresentativeId"
          >
            <a-input >
              <template #prefix>
                <LinkOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="网站描述"
              name="legalRepresentativeId"
          >
            <a-input >
              <template #prefix>
                <MoreOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              class="col-span-6"
              label="网站QQ"
              name="legalRepresentativeId"
          >
            <a-input >
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
            <a-input >
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
            <a-input >
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
            <a-input >
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
            <a-input >
              <template #prefix>
                <NumberOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>
<script setup>
import {
  AlignCenterOutlined,
  BorderHorizontalOutlined,
  UnorderedListOutlined,
  NumberOutlined,
  SmallDashOutlined,
  BarsOutlined,
  EnvironmentOutlined,
  LinkOutlined,
  QqOutlined,
  PhoneOutlined,
  MailOutlined,
  MoreOutlined
} from "@ant-design/icons-vue";
</script>