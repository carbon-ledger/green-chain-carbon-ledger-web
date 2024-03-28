<template>
  <a-carousel class="h-[600px]" autoplay>
    <div class="relative bg-[url('@/assets/images/img16.jpg')] bg-cover bg-center h-[600px]">
      <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25"></div>
        <div class="flex flex-col h-full z-10 relative justify-center">
          <div class="container p-72">
            <div class="grid grid-cols-6 gap-y-6">
              <div class="col-span-6">
                <span class="text-start text-white text-4xl">探索低碳之路，引领绿色创新发展</span>
              </div>
              <div class="col-span-6">
                <button class="mt-2 text-white bg-green-500 hover:bg-spring text-lg font-bold py-2 px-4 rounded">
                  立即使用
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="relative bg-[url('@/assets/images/img13.jpg')] bg-cover bg-center h-[600px]">
      <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25"></div>
      <div class="flex flex-col h-full z-10 relative justify-center">
        <div class="container p-72">
          <div class="grid grid-cols-6 gap-y-6">
            <div class="col-span-6">
              <span class="text-start text-white text-4xl">实现双碳目标，助力企业绿色转型</span>
            </div>
            <div class="col-span-6">
              <button class="mt-2 text-white bg-green-500 hover:bg-spring text-lg font-bold py-2 px-4 rounded">
                立即使用
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-carousel>
</template>
<script setup>

</script>



