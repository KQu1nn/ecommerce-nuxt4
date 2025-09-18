<template>
  <div class="flex flex-row gap-2 items-center text-2xl text-gray-800">
    <Icon name="lucide:house" size="30" />
    <p class="font-medium">Dashboard</p>
  </div>
</template>

<script setup>
import { useLoginStore } from '~/stores/login'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'dashboard-layout'
})

const loginStore = useLoginStore()
const router = useRouter()

async function handleLogout() {
  await loginStore.logout()
  router.push('/')
}


</script>