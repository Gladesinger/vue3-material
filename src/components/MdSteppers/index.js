import material from '@/material'
import MdSteppers from './MdSteppers.vue'
import MdStep from './MdStep.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdSteppers.name, MdSteppers)
  Vue.component(MdStep.name, MdStep)
}
