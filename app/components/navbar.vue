<template>
  <div class="w-full px-14 py-5 flex flex-row justify-between items-center">
    <span class="text-3xl font-bold text-gray-900">Acessorize</span>
    <ul class="flex flex-row gap-8 items-center">
      <li v-for="item in nav"
        class="cursor-pointer text-md text-gray-700 border-b-2 border-b-transparent hover:border-b-gray-800 hover:text-gray-900 font-sans font-medium transition-colors transition-border duration-300">
        <NuxtLink :to="item.url">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
    <div class="flex flex-row gap-5 items-center">
      <button class="flex items-center gap-1 cursor-pointer py-1.5 px-5 text-gray-900">

        <NuxtLink to="/login" class="font-medium flex flex-row gap-1 items-center">
          <Icon name="lucide:user" size="20" />
          Login</NuxtLink>
      </button>
      <Icon name="lucide:shopping-cart" size="23" class="cursor-pointer" />
      <button  v-if="loginStore.user"  @click="handleLogout" class="bg-red-500 text-white px-4 py-1 rounded cursor-pointer">
    Sair
  </button>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from '~/stores/login'
import { useRouter } from 'vue-router'

const nav = ref([
  { title: 'INÍCIO', url: '/' },
  { title: 'CATEGORIA', url: '/' },
  { title: 'SOBRE NÓS', url: '/' },
  { title: 'CONTATO', url: '/' }
])

const loginStore = useLoginStore()
const router = useRouter()

async function handleLogout() {
  await loginStore.logout()
  router.push('/')
}


</script>
