import material from '@/material'
import MdDivider from './MdDivider.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdDivider.name, MdDivider)
}
