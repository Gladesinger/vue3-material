import material from '@/material'
import MdEmptyState from './MdEmptyState.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdEmptyState.name, MdEmptyState)
}