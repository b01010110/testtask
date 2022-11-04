import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'
import SvgIcon from '@/components/global/SvgIcon.vue'
import 'virtual:svg-icons-register'

const app = createApp(App)

loadFonts()

app.use(router)
app.use(vuetify)

app.component('SvgIcon', SvgIcon)

app.mount('#app')
