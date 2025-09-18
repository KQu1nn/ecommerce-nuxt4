import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useSupabase } from '~/utils/supabase'

export const useLoginStore = defineStore('login', () => {
  const user = ref(null)
  const error = ref(null)

  const supabase = useSupabase()

  async function login(email, senha) {
    const { data, error: err } = await supabase.auth.signInWithPassword({
      email,
      password: senha
    })

    if (err) {
      error.value = err.message
      return { success: false, message: err.message }
    }

    user.value = data.user
    return { success: true, user: data.user }
  }

  async function logout() {
    await supabase.auth.signOut()
    user.value = null
  }

  async function checkUser() {
    const { data, error: err } = await supabase.auth.getSession()

    if (err) {
      error.value = err.message
      user.value = null
      return
    }

    user.value = data.session?.user || null
  }

  supabase.auth.onAuthStateChange((_event, session) => {
    user.value = session?.user || null
  })

  return { user, error, login, logout, checkUser }
})
