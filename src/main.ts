import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import vuetify from '@/plugins/vuetify'

import 'virtual:svg-icons-register'
import '@/assets/scss/main.scss'

import Sortable from 'sortablejs'
import { GhostBehavior } from '@/plugins/sortablejs/GhostBehavior'
Sortable.mount(GhostBehavior)

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
