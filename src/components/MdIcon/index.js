import material from '@/material'
import MdIcon from './MdIcon.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdIcon.name, MdIcon)
}
