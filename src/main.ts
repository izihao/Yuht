import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import useGlobal from '@/global/index'

const app = createApp(App)
app.use(useGlobal)


app.use(createPinia())
app.use(router)

app.mount('#app')
