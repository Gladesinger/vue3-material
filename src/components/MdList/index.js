import material from '@/material'
import MdList from './MdList.vue'
import MdListItem from './MdListItem/MdListItem.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdList.name, MdList)
  Vue.component(MdListItem.name, MdListItem)
}
