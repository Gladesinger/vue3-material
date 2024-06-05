import material from '@/material'
import MdToolbar from './MdToolbar.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdToolbar.name, MdToolbar)
}
