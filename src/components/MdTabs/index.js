import material from '@/material'
import MdTabs from './MdTabs.vue'
import MdTab from './MdTab.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdTabs.name, MdTabs)
  Vue.component(MdTab.name, MdTab)
}