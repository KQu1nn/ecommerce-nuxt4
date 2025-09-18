<template>
  <div class="w-full min-h-dvh flex items-center justify-center bg-gray-100">
    <div class="w-[500px] min-h-[450px] p-10 flex flex-col items-center gap-3 bg-white rounded-xl shadow-xl">
      <h1 class="text-3xl font-bold text-gray-800">Acessorize</h1>
      <div class="w-full text-center">
        <h2 class="text-xl font-medium text-gray-700">Bem vindo de volta!</h2>
        <p class="text-md text-gray-700">Faça login para acessar sua conta</p>
      </div>
      <form @submit.prevent="login" class="w-full flex items-center flex-col gap-5 py-5">
        <div class="w-full flex flex-col gap-3">
          <label class="flex flex-col gap-1">
            <span class="font-medium text-gray-600">Email</span>
            <input v-model="email" type="email" placeholder="exemplo@email.com"
              class="w-full border border-gray-200 px-3 py-1.5 rounded-lg outline-0" />
          </label>
          <label class="flex flex-col gap-1">
            <span class="font-medium text-gray-600">
              Senha
            </span>
            <input v-model="senha" type="password" placeholder="********"
              class="w-full border border-gray-200 px-3 py-1.5 rounded-lg outline-0" />
          </label>
        </div>
        <button class="w-[180px] cursor-pointer bg-green-500 rounded-lg text-white font-medium py-2">Entrar</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useLoginStore } from '~/stores/login'
import { useRouter } from 'vue-router'

const loginStore = useLoginStore()
const router = useRouter()

const email = ref('')
const senha = ref('')

async function login() {
  if (!email.value || !senha.value) {
    alert("Preencha todos os campos!")
    return
  }

  const result = await loginStore.login(email.value, senha.value)

  if (!result.success) {
    alert(result.message)
    return
  }

  alert(`Bem-vindo, ${result.user.email}!`)
  email.value = ''
  senha.value = ''

  router.push('/dashboard')
}
</script>