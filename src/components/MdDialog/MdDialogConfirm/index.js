import material from '@/material'
//import MdDialog from '../MdDialog.vue'
import MdDialogConfirm from './MdDialogConfirm.vue'

export default Vue => {
  material(Vue)
  //Vue.component(MdDialog.name, MdDialog)
  Vue.component(MdDialogConfirm.name, MdDialogConfirm)
}
