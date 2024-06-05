import material from '@/material'
import MdSpeedDial from './MdSpeedDial.vue'
import MdSpeedDialTarget from './MdSpeedDialTarget.vue'
import MdSpeedDialContent from './MdSpeedDialContent.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdSpeedDial.name, MdSpeedDial)
  Vue.component(MdSpeedDialTarget.name, MdSpeedDialTarget)
  Vue.component(MdSpeedDialContent.name, MdSpeedDialContent)
}
