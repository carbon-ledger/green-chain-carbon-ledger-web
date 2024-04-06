<template>
  <div class="col-span-2 grid mb-6">
    <a-typography-title :level="5" class="pb-3">热消耗</a-typography-title>
    <a-form
        :model="heatArea"
        class="grid grid-cols-1 lg:grid-cols-3 gap-x-6"
    >
      <!-- 购入量 -->
      <a-form-item
          :rules="[{ required: true, message: '购入量为必填' }]"
          label="期初量"
          name="buy"
      >
        <a-input-number
            v-model:value="heatArea.buy"
            :min="0"
            :step="0.01"
            placeholder="请输入购入量"
            style="width: 100%"
        >
          <template #suffix/>
        </a-input-number>
      </a-form-item>
      <!--  生产之外 -->
      <a-form-item
          :rules="[{ required: true, message: '生产外为必填项' }]"
          label="生产外"
          name="outside"
      >
        <a-input-number
            v-model:value="heatArea.outside"
            :min="0"
            :step="0.01"
            placeholder="请输入生产外的量"
            style="width: 100%"
        >
          <template #suffix/>
        </a-input-number>
      </a-form-item>
      <!-- 添加外销量 -->
      <a-form-item
          :rules="[{ required: true, message: '外销量为必填项' }]"
          label="外销量"
          name="export"
      >
        <a-input-number
            v-model:value="heatArea.export"
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
import {heatAreaVO} from "@/models/VoModel.js";

const heatArea = ref(heatAreaVO);
</script>