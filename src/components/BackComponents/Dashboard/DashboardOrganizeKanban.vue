<template>
  <div class="grid grid-cols-12 gap-3">
    <a-card size="small" class="col-span-6 shadow" hoverable>
      <div class="grid grid-cols-4 gap-3 justify-center items-center">
        <div class="col-span-2">
          <div ref="quotaManagement" style="width: 150px;height:150px;"></div>
        </div>
        <div class="col-span-2">
          <div class="w-full text-center">
            <span class="text-2xl font-bold">配额管理</span>
          </div>
        </div>
      </div>
    </a-card>
    <a-card size="small" class="col-span-6 shadow" hoverable>
      <div class="grid grid-cols-4 gap-3 justify-center items-center">
        <div class="col-span-2">
          <div ref="transactionManagementEChart" style="width: 150px;height:150px;"></div>
        </div>
        <div class="col-span-2">
          <div class="w-full text-center">
            <span class="text-2xl font-bold">交易管理</span>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup>

</script>

<script>
import * as echarts from 'echarts';

export default {
  mounted() {
    echarts
        .init(this.$refs.transactionManagementEChart, null, {renderer: 'svg'})
        .setOption(transactionManagementOption);
    echarts
        .init(this.$refs.quotaManagement, null, {renderer: 'svg'})
        .setOption(quotaManagementOption);
  }
};

const transactionManagementOption = {
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: '我的交易',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['60%', '50%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 10,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1, name: '未发布' },
        { value: 2, name: '审核中' },
        { value: 1, name: '已发布' },
        { value: 2, name: '待付款' },
        { value: 1, name: '已完成' }
      ]
    }
  ]
};

const quotaManagementOption = {
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: '我的配额',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['60%', '70%'],
      // adjust the start and end angle
      startAngle: 180,
      endAngle: 360,
      data: [
        {value: 500, name: '未使用'},
        {value: 300, name: '已使用'}
      ]
    }
  ]
}
</script>
