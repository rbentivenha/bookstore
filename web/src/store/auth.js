import { writable } from 'svelte/store'
import auth_service from '../services/auth.service/index'

function login_store () {
  const { subscribe, set, update } = writable(null)

  return {
    subscribe,
    login: payload => {
      Promise.resolve(auth_service.login(payload)).then(res => {
        update(() => res)
      })
    },
    reset: () => set(null)
  }
}

export const login = login_store()
