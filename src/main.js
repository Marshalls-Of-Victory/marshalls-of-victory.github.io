import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')

// app.config.globalProperties.$emitGlobalEvent = (eventData) => {
//     console.log('Global Event Triggered:', eventData);
//     // Handle the event as needed
// };