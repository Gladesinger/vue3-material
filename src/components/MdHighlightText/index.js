import material from '@/material'
import MdHighlightText from './MdHighlightText.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdHighlightText.name, MdHighlightText)
}
