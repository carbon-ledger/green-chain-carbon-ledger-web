<template>
  <div class="relative flex justify-between items-center shadow-sm h-16">
    <a @click="$router.push('/')">
      <img src="/favicon.ico" alt="LOGO" class="ml-6 w-12"/>
    </a>
    <div class="text-3xl mt-3 text-black">绿链碳系统管理界面</div>
    <div class="relative mr-12">
      <button @click="$toggleDropdown()" id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="mr-6 flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300">
        <img class="w-10 h-10 rounded-full" src="" alt="user photo">
      </button>
      <!-- Dropdown menu -->
      <div v-if="$isDropdownOpen" id="dropdownAvatar" class="absolute z-10 bg-white divide-y divide-gray-100 rounded-sm shadow w-28 right-0 mt-4">
        <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownUserAvatarButton">
          <li>
            <a href="#" class="flex px-4 py-2 hover:bg-gray-100">
              <svg class="w-4 h-4 mt-[2px] mr-1 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
             个人中心
            </a>
          </li>
          <li>
            <a href="/alterpassword" class="flex px-4 py-2 hover:bg-gray-100">
              <svg class="w-4 h-4 mt-[2px] mr-1 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-7c0-.6.4-1 1-1Z"/>
              </svg>
              修改密码
            </a>
          </li>
        </ul>
        <div class="py-2" @click="$router.push('/')">
          <a href="#" class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <svg class="w-4 h-4 mt-[2px] mr-1 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
            </svg>
            退出登录
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const $isDropdownOpen = ref(false);

function $toggleDropdown() {
  $isDropdownOpen.value = !$isDropdownOpen.value;
}
</script>
