<template>
  <nav class="bg-white border-gray-200 px-3 fixed top-0 left-0 right-0 z-50">
    <div class="w-full flex items-center justify-between">
      <a @click="$router.push('/')">
        <img src="/favicon.ico" alt="LOGO" style="margin-left:2vw; max-width:50%; height:auto; width:5vw; display: block;" />
      </a>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">首页</a>
          </li>
          <li>
            <a href="/AboutUsView" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">关于我们</a>
          </li>
          <li>
            <a href="" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">碳核算服务</a>
          </li>
          <li>
            <a href="" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">碳交易服务</a>
          </li>
        </ul>
      </div>
      <div class="w-48 gap-1 flex justify-center items-center">
        <button class="text-blue-500 hover:text-blue-800" @click="$router.push('/auth/login')">登录</button>
        <span class="text-blue-500 mx-1">|</span>
        <button class="text-blue-500 hover:text-blue-800" @click="$router.push('/auth/register/organize')">注册</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
