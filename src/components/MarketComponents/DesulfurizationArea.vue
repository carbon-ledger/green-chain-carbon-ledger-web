<template>
  <div class="col-span-2 grid mb-6">
    <a-typography-title :level="5" class="pb-3">脱硫消耗</a-typography-title>
    <a-form
        :model="desulfurizationArea"
        class="grid grid-cols-1 lg:grid-cols-2 gap-x-6"
    >
      <a-space
          v-for="(data, index) in desulfurizationArea"
          class="col-span-2 grid grid-cols-2 gap-x-6"
      >
        <!-- 填写类型 -->
        <a-form-item
            :name="[index, 'name']"
            :rules="[{ required: true, message: '类型为必填项' }]"
            label="类型"
        >
          <a-select
              v-model:value="data.name"
              placeholder="请输入类型">
            <a-select-option v-for="item in getFactorDesulfurization.data" :key="item.name" :value="item.name">{{ item.displayName }} - <span class="text-beaver">{{ item.name }}</span></a-select-option>
          </a-select>
        </a-form-item>
        <!-- 周期内总消耗量 -->
        <a-form-item
            :name="[index, 'material', 'consumption']"
            :rules="[{ required: true, message: '周期内总消耗量不能为空' }]"
            label="周期消耗"
        >
          <a-input-number
              v-model:value="data.material.consumption"
              :min="0"
              :step="0.01"
              placeholder="填写周期消耗量"
              style="width: 100%"
          >
            <template #suffix/>
          </a-input-number>
        </a-form-item>
      </a-space>
      <!-- 添加原料的按钮 -->
      <a-button
          class="col-span-2"
          type="dashed"
          @click="addDesulfurizationArea"
      >
        添加
      </a-button>
    </a-form>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {desulfurizationAreaVO} from "@/models/VoModel.js";
import {getTypeDO} from "@/models/DoModel.js";
import {getFactorDesulfurizationApi} from "@/api/CarbonApi.js";

const desulfurizationArea = ref(desulfurizationAreaVO);
const getFactorDesulfurization = ref(getTypeDO);

onMounted(async _ => {
  getFactorDesulfurization.value = await getFactorDesulfurizationApi();
})

const addDesulfurizationArea = _ => desulfurizationArea.value.push({
  name: undefined,
  material: {
    consumption: 0.00
  }
});
</script>