import { defineStore } from 'pinia'

export const getStore = defineStore('store', {
  state: () => {
    return {
      lang: localStorage.getItem("lang") == null ? 0 : localStorage.getItem("lang"),
      releasesHTML: "",
      data: {}
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
})