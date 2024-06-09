import material from '@/material'
import MdBadge from './MdBadge.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdBadge.name, MdBadge)
}