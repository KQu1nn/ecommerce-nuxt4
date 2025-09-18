import { useLoginStore } from "~/stores/login"

export default defineNuxtRouteMiddleware(async (to, from) => {
  const loginStore = useLoginStore()

  if (loginStore.user === null) {
    await loginStore.checkUser()
  }

  if (to.path.startsWith('/dashboard') && !loginStore.user) {
    return navigateTo('/')
  }

  if (to.path === '/login' && loginStore.user) {
    return navigateTo('/dashboard')
  }
})
