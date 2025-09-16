<template>
  <div class="w-full px-14 py-10 bg-gray-100">
    <div class="w-full bg-white rounded-2xl p-14">

      <div v-if="product" class="w-full flex flex-row gap-10">
        <NuxtImg :src="product.img" width="360" height="250" />

        <div class="w-[400px] flex flex-col gap-5">
          <h1 class="text-2xl font-medium text-gray-800">{{ product.name }}</h1>
          <p>{{ product.description }}</p>
          <p class="text-sm text-gray-800 underline cursor-pointer">Mains informações</p>
        </div>

        <div class="w-[400px]">
          <div class="w-full min-h-[100px] p-5 rounded-xl border border-gray-100 shadow-md">
            <div class="flex flex-row gap-1">
              <p class="line-through text-gray-700">R$ 1.299,00</p>
              <p class="bg-green-700 rounded-full text-white text-[12px] px-2 flex items-center justify-center">24%</p>
            </div>
            <h1 class="text-3xl font-bold text-gray-800">R$ {{ product.price }},00</h1>
            <p class="font-medium">no Pix</p>
          </div>

          <div class="w-full flex flex-col items-center py-5">
            <p class="font-medium text-gray-800">Quantidade:</p>
            <div class="flex flex-row items-center gap-5 border border-gray-100 rounded-xl px-5 py-1">
              <Icon name="lucide:minus" size="18" class="text-gray-700"/>
                <p>1 unidade</p>
              <Icon name="lucide:plus" size="18" class="text-gray-700"/>
            </div>
          </div>

          <button class="w-full flex flex-row items-center gap-3 justify-center py-3 cursor-pointer font-medium text-white bg-red-500 rounded-xl">
            <Icon name="lucide:shopping-bag" size="18" />
            <p class="text-xl">Comprar</p>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import { useProductsStore } from '~/stores/products';

const route = useRoute();
const productsStore = useProductsStore();

const product = computed(() =>
  productsStore.products.find(p => p.id == route.params.id)
)
</script>