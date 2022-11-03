import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'

const app = createApp(App)

loadFonts()

app.use(router)
app.use(vuetify)

app.mount('#app')
