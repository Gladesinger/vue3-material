import material from '@/material'
import MdContent from './MdContent.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdContent.name, MdContent)
}
