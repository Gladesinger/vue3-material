import material from '@/material'
import MdRipple from './MdRipple.vue'
import MdWave from './MdWave.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdRipple.name, MdRipple)
  Vue.component(MdWave.name, MdWave)
}
