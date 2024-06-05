import material from '@/material'
import MdAutocomplete from './MdAutocomplete.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdAutocomplete.name, MdAutocomplete)
}