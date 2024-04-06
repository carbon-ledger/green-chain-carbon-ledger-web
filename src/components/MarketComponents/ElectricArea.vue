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
        <a-select
            v-model:value="electric.electricCompany"
            placeholder="请输入类型">
          <a-select-option v-for="item in getFactorOther.data" :key="item.name" :value="item.name">{{ item.displayName }}</a-select-option>
        </a-select>
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
import {onMounted, ref} from "vue";
import {sendAccountingVO} from "@/models/VoModel.js";
import {getTypeDO} from "@/models/DoModel.js";
import {getFactorOtherApi} from "@/api/CarbonApi.js";

const electric = ref(sendAccountingVO);
const getFactorOther = ref(getTypeDO);

onMounted(async _ => {
  const res = await getFactorOtherApi();
  if (res.output === "Success") {
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i].name.search(/electric/) === -1) {
        res.data.splice(i, 1);
        i = i - 1;
      }
    }
    getFactorOther.value = res;
  }
})
</script>