import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

import 'virtual:svg-icons-register'
import '@/assets/scss/main.scss'

const app = createApp(App)

app.use(router)
app.use(vuetify)

loadFonts()

app.mount('#app')
