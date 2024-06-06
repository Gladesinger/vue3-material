import material from '@/material'
//import MdDialog from '../MdDialog.vue'
import MdDialogPrompt from './MdDialogPrompt.vue'

export default Vue => {
  material(Vue)
  //Vue.component(MdDialog.name, MdDialog)
  Vue.component(MdDialogPrompt.name, MdDialogPrompt)
}
