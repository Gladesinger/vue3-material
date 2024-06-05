import material from '@/material'
import MdChips from './MdChips.vue'
import MdChip from './MdChip.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdChips.name, MdChips)
  Vue.component(MdChip.name, MdChip)
}
