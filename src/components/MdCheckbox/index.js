import material from '@/material'
import MdCheckbox from './MdCheckbox.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdCheckbox.name, MdCheckbox)
}
