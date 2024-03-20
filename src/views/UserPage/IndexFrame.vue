<script setup>
import router from "@/router/index.js";
import DashboardFooter from "@/components/BackComponents/DashboardFooter.vue";
import UserMenuBar from "@/components/BackComponents/UserMenuBar.vue";
</script>

<template>
  <img alt="image description" class="h-20 w-screen" src="@/assets/images/image-personal-navbar.png">
  <div class="px-auto px-3 lg:px-30 xl:px-40 2xl:px-60 py-6">
    <a-page-header
        sub-title="个人账户信息操作管理中心"
        title="账户管理"
        @back="() => router.replace('/dashboard/')"
    />
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-4 md:col-span-1">
        <div class="shadow-lg rounded-lg">
          <UserMenuBar/>
        </div>
      </div>
      <div class="col-span-4 md:col-span-3">
        <a-card class="shadow-lg">
          <RouterView/>
        </a-card>
      </div>
      <div class="col-span-4">
        <DashboardFooter/>
      </div>
    </div>
  </div>
</template>

<script>
import {nextTick} from "vue";
import router from "@/router/index.js";

function GetUrlRelativePath() {
  const url = document.location.toString();
  const arrUrl = url.split("//");

  const start = arrUrl[1].indexOf("/");
  //stop省略，截取从start开始到结尾的所有字符
  let relUrl = arrUrl[1].substring(start);

  if (relUrl.indexOf("?") !== -1) {
    relUrl = relUrl.split("?")[0];
  }
  return relUrl;
}

nextTick(() => {
      if (GetUrlRelativePath() === "/user") {
        router.push("/user/profile")
      }
    }
)
</script>