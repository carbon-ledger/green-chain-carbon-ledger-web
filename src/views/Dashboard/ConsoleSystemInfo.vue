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
          <a-descriptions title="服务器信息" bordered>
            <a-descriptions-item label="CPU信息" :span="2">
              型号：Intel Xeon E5-2680 v4
              <br />
              核心数：14核心
              <br />
              线程数：28线程
              <br />
              基础处理速度：2.4 GHz
              <br />
              最大加速处理速度：3.3 GHz
            </a-descriptions-item>
            <a-descriptions-item label="RAM信息">
              容量：32GB
              <br />
              已使用容量：16GB
              <br />
              类型：DDR4 ECC Registered (RDIMM)
              <br />
              频率：2666 MHz
              <br/>
              延迟：CL19
              <br/>
              电压：1.2V
              <br />
              最大加速处理速度：3.3 GHz
            </a-descriptions-item>
            <a-descriptions-item label="电源信息" :span="2">
              功率容量：800W
              <br/>
              类型：80 PLUS Platinum
              <br/>
              配置：1+1 冗余配置
              <br/>
              输入电压范围：100-240V AC
              <br/>
              频率范围：50-60Hz
              <br/>
              冷却方式：内置风扇
            </a-descriptions-item>
            <a-descriptions-item label="存储设备">
              硬盘驱动器（HDD）示例
              <br/>
              型号：Seagate Exos X16 14TB Enterprise HDD
              <br/>
              容量：14TB
              <br/>
              接口类型：SAS (Serial Attached SCSI)
              <br/>
              转速：7200 RPM
              <br/>
              缓存：256MB
            </a-descriptions-item>
            <a-descriptions-item label="机箱和散热" :span="2">
              机箱类型：机架式（Rack Mount）2U
              <br/>
              散热器类型：铜基底散热器配备热管技术
              <br/>
              风扇数量：4个高效率热风扇
            </a-descriptions-item>
            <a-descriptions-item label="接口管理">
              远程管理硬件：HP Integrated Lights-Out (iLO) Advanced
              <br/>
              管理软件：HP Insight Manager
              <br/>
              版本：iLO 5
            </a-descriptions-item>
            <a-descriptions-item label="操作系统" :span="2">Linux</a-descriptions-item>
            <a-descriptions-item label="是否正常链接">
              <a-badge status="processing" text="正常" />
            </a-descriptions-item>
          </a-descriptions>
        </div>
      </a-card>
    </div>
  </div>
</template>

