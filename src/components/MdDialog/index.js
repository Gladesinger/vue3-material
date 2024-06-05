import material from '@/material'
import MdDialog from './MdDialog.vue'
import MdDialogTitle from './MdDialogTitle.vue'
import MdDialogContent from './MdDialogContent.vue'
import MdDialogActions from './MdDialogActions.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdDialog.name, MdDialog)
  Vue.component(MdDialogTitle.name, MdDialogTitle)
  Vue.component(MdDialogContent.name, MdDialogContent)
  Vue.component(MdDialogActions.name, MdDialogActions)
}
