<template>
  <div
    class=" w-[350px] min-h-[350px] shadow-md hover:shadow-xl hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
    <div class="w-full h-[255px] bg-gray-500">
      <NuxtImg src="/assets/images/computador.webp" width="350" height="255" class="object-cover" />
    </div>
    <div class="w-full p-5">
      <div class="w-full py-3 flex flex-col gap-2">
        <h1 class="text-xl font-medium">Monitor Gamer Acer Nitro</h1>
        <p class="text-sm text-gray-700">O Monitor Gamer Acer Nitro oferece imagens nítidas e cores vibrantes,
          garantindo alta performance para seus jogos favoritos.</p>
        
      </div>
      <div class="w-full py-3 flex flex-row justify-between">
        <h2 class="text-xl text-gray-900 font-bold">R$ 500,00</h2>
        <button class="px-3 py-1.5 flex gap-3  items-center bg-slate-900 text-white hover:font-medium hover:scale-105 transition ease-in-out duration-500 cursor-pointer">
          <Icon name="lucide:shopping-cart" size="18" />
          <span class="text-sm">Comprar</span>
        </button>
      </div>
    </div>
  </div>
</template>
