<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="系统信息"
  >
    <a-descriptions-item>
      <div class="text-mount-pink">
        系统配置允许管理包括服务器信息、链接信息、操作系统版本、安全补丁等，以优化系统性能和提高安全性。
      </div>
    </a-descriptions-item>
  </a-page-header>
  <div class="grid grid-cols-12 p-3">
    <div class="col-span-12">
      <a-card class="shadow-lg p-10">
        <div>
          <h2 class="font-bold mb-8 text-xl">服务器信息</h2>
          <a-form
              v-model="systemform"
              class="grid grid-cols-12 gap-10"
              name="basic"
          >
            <a-form-item
                :rules="[{ required: true, message: '请输入CPU信息！' }]"
                class="col-span-6"
                label="CPU信息"
                name="CPU"
            >
              <a-textarea :rows="6" v-model:value="systemform.CPU">
                <template #prefix>
                  <AlignCenterOutlined class="site-form-item-icon"/>
                </template>
              </a-textarea>
            </a-form-item>
            <a-form-item
                :rules="[{ required: true, message: '请输入RAM信息！' }]"
                class="col-span-6"
                label="RAM信息"
                name="RAM"
            >
              <a-textarea :rows="6" v-model:value="systemform.RAM">
                <template #prefix>
                  <BorderHorizontalOutlined class="site-form-item-icon"/>
                </template>
              </a-textarea>
            </a-form-item>
            <a-form-item
                :rules="[{ required: true, message: '请输入电源信息！' }]"
                class="col-span-6"
                label="电源信息"
                name="legalRepresentativeId"
            >
              <a-textarea :rows="6" v-model:value="systemform.power">
                <template #prefix>
                  <SmallDashOutlined class="site-form-item-icon"/>
                </template>
              </a-textarea>
            </a-form-item>
            <a-form-item
                :rules="[{ required: true, message: '请输入存储设备！' }]"
                class="col-span-6"
                label="存储设备"
                name="storage"
            >
              <a-textarea :rows="6" v-model:value="systemform.storage">
                <template #prefix>
                  <QqOutlined class="site-form-item-icon"/>
                </template>
              </a-textarea>
            </a-form-item>
            <a-form-item
                :rules="[{ required: true, message: '请输入接口管理！' }]"
                class="col-span-6"
                label="接口管理"
                name="interface"
            >
              <a-textarea :rows="3" v-model:value="systemform.interface">
                <template #prefix>
                  <MoreOutlined class="site-form-item-icon"/>
                </template>
              </a-textarea>
            </a-form-item>
            <a-form-item
                :rules="[{ required: true, message: '请输入机箱和散热信息！' }]"
                class="col-span-6"
                label="机箱和散热"
                name="chassis"
            >
              <a-textarea :rows="3" v-model:value="systemform.chassis">
                <template #prefix>
                  <LinkOutlined class="site-form-item-icon"/>
                </template>
              </a-textarea>
            </a-form-item>
            <a-form-item
                :rules="[{ required: true, message: '请输入操作系统信息！' }]"
                class="col-span-6"
                label="操作系统"
                name="operating"
            >
              <a-input v-model:value="systemform.operating">
                <template #prefix>
                  <BarsOutlined class="site-form-item-icon"/>
                </template>
              </a-input>
            </a-form-item>
          </a-form>
        </div>
        <div>
          <h2 class="font-bold my-8 text-xl">链接信息</h2>
          <a-form
              v-model="systemform"
              class="grid grid-cols-12 gap-10"
              name="basic"
          >
            <a-form-item
                :rules="[{ required: true, message: '链接信息！' }]"
                class="col-span-6"
                label="是否正常连接服务器"
                name="radioValue">
              <a-radio-group v-model:value="radioValue">
                <a-radio value="yes">是</a-radio>
                <a-radio value="no">否</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-form>
        </div>
        <div class="col-span-12 text-center">
          <a-button class="bg-aspargus" type="primary">保存更改</a-button>
        </div>
      </a-card>
    </div>
  </div>
</template>
<script setup>
import {
  AlignCenterOutlined,
  BorderHorizontalOutlined,
  HolderOutlined,
  SmallDashOutlined,
  BarsOutlined,
  LinkOutlined,
  QqOutlined,
  MoreOutlined,
} from "@ant-design/icons-vue";
import {reactive, ref} from "vue";

const systemform = reactive({
  CPU:'型号：Intel Xeon E5-2680 v4\n' +
      '核心数：14核心\n' +
      '线程数：28线程\n' +
      '基础处理速度：2.4 GHz\n' +
      '最大加速处理速度：3.3 GHz',
  RAM:'容量：32GB\n' +
      '已使用容量：16GB\n' +
      '类型：DDR4 ECC Registered (RDIMM)\n' +
      '频率：2666 MHz\n' +
      '延迟：CL19\n' +
      '电压：1.2V',
  power: '功率容量：800W\n' +
        '类型：80 PLUS Platinum\n' +
        '配置：1+1 冗余配置\n' +
        '输入电压范围：100-240V AC\n' +
        '频率范围：50-60Hz\n' +
        '冷却方式：内置风扇',
  operating:'Linux',
  storage: '硬盘驱动器（HDD）示例\n' +
           '型号：Seagate Exos X16 14TB Enterprise HDD\n' +
           '容量：14TB\n' +
           '接口类型：SAS (Serial Attached SCSI)\n' +
           '转速：7200 RPM\n' +
           '缓存：256MB',
  interface:'远程管理硬件：HP Integrated Lights-Out (iLO) Advanced\n' +
            '管理软件：HP Insight Manager\n' +
            '版本：iLO 5',
  chassis:'机箱类型：机架式（Rack Mount）2U\n' +
          '散热器类型：铜基底散热器配备热管技术\n' +
          '风扇数量：4个高效率热风扇',
})

const radioValue = ref('yes');
</script>