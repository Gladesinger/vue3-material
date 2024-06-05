import material from '@/material'
import MdTooltip from './MdTooltip.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdTooltip.name, MdTooltip)
}
