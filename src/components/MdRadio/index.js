import material from '@/material'
import MdRadio from './MdRadio.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdRadio.name, MdRadio)
}
