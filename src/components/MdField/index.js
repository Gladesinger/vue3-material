import material from '@/material'
// import MdIcon from '@/components/MdIcon/MdIcon.vue'
import MdField from './MdField.vue'
// import MdSelect from './MdSelect/MdSelect.vue'
import MdFile from './MdFile/MdFile.vue'
import MdInput from './MdInput/MdInput.vue'
import MdTextarea from './MdTextarea/MdTextarea.vue'

export default Vue => {
  material(Vue)
  // Vue.use(MdIcon)
  // Vue.use(MdSelect)
  Vue.component(MdField.name, MdField)
  Vue.component(MdFile.name, MdFile)
  Vue.component(MdInput.name, MdInput)
  Vue.component(MdTextarea.name, MdTextarea)
}
