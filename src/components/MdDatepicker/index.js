import material from '@/material'
import MdDatepicker from './MdDatepicker.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdDatepicker.name, MdDatepicker)
}