import material from '@/material'
import MdMenu from './MdMenu.vue'
import MdMenuContent from './MdMenuContent.vue'
import MdMenuItem from './MdMenuItem.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdMenu.name, MdMenu)
  Vue.component(MdMenuContent.name, MdMenuContent)
  Vue.component(MdMenuItem.name, MdMenuItem)
}
