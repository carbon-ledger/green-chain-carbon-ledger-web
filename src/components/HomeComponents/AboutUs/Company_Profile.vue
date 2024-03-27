<template>
  <div class="w-full flex justify-center bg-blue-50">
    <div class="container p-32">
      <div class="grid grid-cols-6 gap-x-16 gap-y-10">
        <div class="col-span-6">
          <h1 class="text-start text-3xl font-bold">公司简介</h1>
        </div>
        <div class="col-span-2">
          <a-card hoverable>
            <template #cover>
              <img class="h-[600px]" src="@/assets/images/img21.jpg">
            </template>
          </a-card>
        </div>
        <div class="col-span-4 mt-6 text-lg text-gray-500">
          <p style="text-indent: 2em;">
            云象成立于 2014 年，专注服务于金融行业，提供基于“区块链+人工智能 +分布式”的金融数字化整体解决方案，
            是中国最早从事区块链商业应用、法定 数字货币关键核心技术和智能反洗钱研究的团队。云象总部位于杭州，在北京、
            上海、广州、重庆、西安设有分支机构，现有员工 410+人，其中技术人员占比 92%。云象在区块链+人工智能核心领域拥有
            150+项发明专利，60+项软件著作 权，在TKDE、INFOCOM、IJCAI、AAAI、软件学报等国际顶级会议和期刊上发表 30+ 篇论文。
          </p>
          <p style="text-indent: 2em;">
            云象为金融行业客户提供丰富的行业解决方案，拥有区块链平台 YunphantChain、人工智能平台 Yunphant AI、
            分布式数字化应用框架 Yunphant DAP 等核心技术产品;在资产流转、数字存证、智能反洗钱、数字货币、支付 结算、票据管理、
            金融资产交易、供应链金融、金融风险管理等方向拥有众多 解决方案和成功案例。
          </p>
          <p style="text-indent: 2em;">
            国产化及自主可控一直是云象追求的目标并为之努力。
            云象是信息技术创 新工作委员会会员，公司核心产品均通过了中国信通院和中央网信办的测试和 备案，
            且已完成产品向主流国产操作系统及服务器的迁移工作。
          </p>
          <p style="text-indent: 2em;">
            云象是国家高新技术企业，拥有省级研发中心，设有浙江省博士后工作站，
            是之江实验室首个战略协同生态企业;参与了中国人民银行金融分布式账本标 准制定，承担了多个国家金融市场区块链基础设施建设;
            与浙江大学、新加坡 国立大学分别成立了区块链联合实验室，与浙江大学共建了数字资产与区块链 研究所、智能计算与系统实验室，
            在工信部赛迪区块链研究院等机构联合发布 的“2018、2020 中国区块链企业百强榜”上排名榜首。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {CheckCircleOutlined} from "@ant-design/icons-vue";
</script>