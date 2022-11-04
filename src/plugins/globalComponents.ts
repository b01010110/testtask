import type { App } from 'vue'
import SvgIcon from '@/components/global/SvgIcon.vue'
import AppBtn from '@/components/global/AppBtn.vue'

export function loadGlobalComponents(app: App<Element>) {
  app.component('SvgIcon', SvgIcon)
  app.component('AppBtn', AppBtn)
}
