<template>
  <div class="col-span-2 grid mb-6">
    <a-typography-title :level="5" class="col-span-2 pb-3">原料消耗</a-typography-title>
    <a-form
        :model="materialsArea"
        class="grid grid-cols-1 lg:grid-cols-2 gap-x-6"
    >
      <a-space
          v-for="(data, index) in materialsArea"
          class="col-span-2 grid grid-cols-2 lg:grid-cols-6 gap-x-6"
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
            <a-select-option v-for="item in getCarbonType.data" :key="item.name" :value="item.name">{{ item.displayName }}</a-select-option>
          </a-select>
        </a-form-item>
        <!-- 添加购入量 -->
        <a-form-item
            :name="[index, 'material', 'buy']"
            :rules="[{ required: true, message: '购入量为必填项' }]"
            label="购入量"
        >
          <a-input-number
              v-model:value="data.material.buy"
              :min="0"
              :step="0.01"
              placeholder="请输入购入量"
              style="width: 100%"
          >
            <template #suffix/>
          </a-input-number>
        </a-form-item>
        <!-- 添加期初量 -->
        <a-form-item
            :name="[index, 'material', 'openingInv']"
            :rules="[{ required: true, message: '期初量为必填项' }]"
            label="期初量"
        >
          <a-input-number
              v-model:value="data.material.openingInv"
              :min="0"
              :step="0.01"
              placeholder="请输入期初量"
              style="width: 100%"
          >
            <template #suffix/>
          </a-input-number>
        </a-form-item>
        <!--  添加期末量 -->
        <a-form-item
            :name="[index, 'material', 'endingInv']"
            :rules="[{ required: true, message: '期末量为必填项' }]"
            label="期末量"
        >
          <a-input-number
              v-model:value="data.material.endingInv"
              :min="0"
              :step="0.01"
              placeholder="请输入期末量"
              style="width: 100%"
          >
            <template #suffix/>
          </a-input-number>
        </a-form-item>
        <!--  生产之外 -->
        <a-form-item
            :name="[index, 'material', 'outside']"
            :rules="[{ required: true, message: '生产之外为必填项' }]"
            label="生产外"
        >
          <a-input-number
              v-model:value="data.material.outside"
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
            :name="[index, 'material', 'outside']"
            :rules="[{ required: true, message: '外销量为必填项' }]"
            label="外销量"
        >
          <a-input-number
              v-model:value="data.material.export"
              :min="0"
              :step="0.01"
              placeholder="请输入外销量"
              style="width: 100%"
          >
            <template #suffix/>
          </a-input-number>
        </a-form-item>
      </a-space>
    </a-form>
    <!-- 添加原料的按钮 -->
    <a-button
        class="col-span-2"
        type="dashed"
        @click="addMaterialArea"
    >
      添加
    </a-button>
  </div>
</template>

<script setup>
import {materialAreaVO} from "@/models/VoModel.js";
import {onMounted, ref} from "vue";
import {getTypeDO} from "@/models/DoModel.js";
import {getCarbonItemTypeApi} from "@/api/CarbonApi.js";



const materialsArea = ref(materialAreaVO);
const getCarbonType = ref(getTypeDO);

onMounted(async _ => {
  getCarbonType.value = await getCarbonItemTypeApi();
})

const addMaterialArea = _ => materialsArea.value.push({
  name: undefined,
  material: {
    buy: 0.0,
    openingInv: 0.0,
    endingInv: 0.0,
    outside: 0.0,
    export: 0.0
  }
});
</script>