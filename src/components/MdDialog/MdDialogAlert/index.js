import material from '@/material'
//import MdDialog from '../MdDialog.vue'
import MdDialogAlert from './MdDialogAlert.vue'

export default Vue => {
  material(Vue)
  //Vue.component(MdDialog.name, MdDialog)
  Vue.component(MdDialogAlert.name, MdDialogAlert)
}
