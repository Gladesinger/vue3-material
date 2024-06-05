import material from '@/material'
import MdAvatar from './MdAvatar.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdAvatar.name, MdAvatar)
}
