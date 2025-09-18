<template>
  <aside class=" w-[350px] h-dvh shadow-xl bg-white flex flex-col items-center">
    <div class=" w-full flex flex-col items-center">
      <h1 class="text-2xl text-gray-900 text-center py-8">Dashboard</h1>
      <div class=" w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center">
        <Icon name="lucide:user" size="40" class="text-white" />
      </div>
    </div>


    <div class="w-11/12 my-10 flex flex-col gap-4 text-gray-800 ">
      <NuxtLink to="/dashboard"
        class="w-full flex flex-row items-center bg-gray-100 p-3 rounded-xl cursor-pointer">
        <div class="w-full flex flex-row items-center justify-between">
          <div class="flex flex-row gap-2 items-center">
            <Icon name="lucide:house" size="20" />
            <p class="font-medium">Dashboard</p>
          </div>
          <Icon name="lucide:chevron-right" size="20" />
        </div>
      </NuxtLink>

      <NuxtLink to="/new-product"
        class="w-full flex flex-row items-center bg-gray-100 p-3 rounded-xl cursor-pointer">
        <div class="w-full flex flex-row items-center justify-between">
          <div class="flex flex-row gap-2 items-center">
            <Icon name="lucide:package-plus" size="20" />
            <p class="font-medium">Adicionar produto</p>
          </div>
          <Icon name="lucide:chevron-right" size="20" />
        </div>
      </NuxtLink>

    </div>

  </aside>
</template>
