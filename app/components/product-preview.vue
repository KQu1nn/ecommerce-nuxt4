<template>
  <div class="w-full flex justify-between flex-row flex-wrap gap-14 py-14">
    <ProductCard 
      v-for="product in productsStore.products" 
      :key="product.id"
      :product="product"/>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products';
const productsStore = useProductsStore();

</script>
