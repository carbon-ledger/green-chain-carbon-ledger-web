<template>
  <nav class="bg-white border-gray-200 px-3 fixed top-0 left-0 right-0 z-50">
    <div class="w-full flex items-center justify-between">
      <a @click="$router.push('/')">
        <img src="/favicon.ico" alt="LOGO" style="margin-left:2vw; max-width:50%; height:auto; width:5vw; display: block;" />
      </a>
      <div class="w-full md:block md:w-auto">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <a href="/" class="text-spring block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-green-500 font-semibold">首页</a>
          </li>
          <li>
            <a href="/AboutUsView" class="block py-2 px-3 text-spring rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-green-500 font-semibold">关于我们</a>
          </li>
          <li>
            <a href="" class="block py-2 px-3 text-spring rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-green-500 font-semibold">碳核算服务</a>
          </li>
          <li>
            <a href="" class="block py-2 px-3 text-spring rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-green-500 font-semibold">碳交易服务</a>
          </li>
        </ul>
      </div>
      <div class="w-32 p-2 gap-1 bg-aspargus flex justify-center items-center">
        <button class="text-gray-200 hover:text-spring" @click="$router.push('/auth/login')">登录</button>
        <span class="text-gray-200 mx-1">|</span>
        <button class="text-gray-200  hover:text-spring" @click="$router.push('/auth/register/organize')">注册</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
