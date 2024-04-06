<template>
  <div class="col-span-2 grid mb-6">
    <a-typography-title :level="5" class="pb-3">电力消耗</a-typography-title>
    <a-form
        :model="electric"
        class="grid grid-cols-1 lg:grid-cols-4 gap-x-6"
    >
      <!--  添加电力公司 -->
      <a-form-item
          :rules="[{ required: true, message: '电力公司为必填项' }]"
          label="电力公司"
          name="electricCompany"
      >
        <a-input
            v-model:value="electric.electricCompany"
            placeholder="请选择电力公司"
            style="width: 100%"
        >
          <template #suffix/>
        </a-input>
      </a-form-item>
      <!-- 添加购入量 -->
      <a-form-item
          :rules="[{ required: true, message: '购入量为必填项' }]"
          label="购入量"
          name="electricBuy"
      >
        <a-input-number
            v-model:value="electric.electricBuy"
            :min="0"
            :step="0.01"
            placeholder="请输入购买量"
            style="width: 100%">
          <template #suffix/>
        </a-input-number>
      </a-form-item>
      <!-- 添加生产之外 -->
      <a-form-item
          :rules="[{ required: true, message: '生产外为必填项' }]"
          label="生产外"
          name="electricOutside"
      >
        <a-input-number
            v-model:value="electric.electricOutside"
            :min="0"
            :step="0.01"
            placeholder="请输入生产之外"
            style="width: 100%"
        >
          <template #suffix/>
        </a-input-number>
      </a-form-item>
      <!-- 添加外销量 -->
      <a-form-item
          :rules="[{ required: true, message: '外销量为必填项' }]"
          label="外销量"
          name="electricExport"
      >
        <a-input-number
            v-model:value="electric.electricExport"
            :min="0"
            :step="0.01"
            placeholder="请输入外销量"
            style="width: 100%"
        >
          <template #suffix/>
        </a-input-number>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {sendAccountingVO} from "@/models/VoModel.js";

const electric = ref(sendAccountingVO);
</script>