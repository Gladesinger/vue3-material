import material from '@/material'
import MdCard from './MdCard.vue'
import MdCardArea from './MdCardArea/MdCardArea.vue'
import MdCardHeader from './MdCardHeader/MdCardHeader.vue'
import MdCardHeaderText from './MdCardHeader/MdCardHeaderText.vue'
import MdCardMedia from './MdCardMedia/MdCardMedia.vue'
import MdCardMediaActions from './MdCardMedia/MdCardMediaActions.vue'
import MdCardMediaCover from './MdCardMedia/MdCardMediaCover.vue'
import MdCardContent from './MdCardContent/MdCardContent.vue'
import MdCardExpand from './MdCardExpand/MdCardExpand.vue'
import MdCardExpandTrigger from './MdCardExpand/MdCardExpandTrigger.vue'
import MdCardExpandContent from './MdCardExpand/MdCardExpandContent.vue'
import MdCardActions from './MdCardActions/MdCardActions.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdCard.name, MdCard)
  Vue.component(MdCardArea.name, MdCardArea)
  Vue.component(MdCardHeader.name, MdCardHeader)
  Vue.component(MdCardHeaderText.name, MdCardHeaderText)
  Vue.component(MdCardMedia.name, MdCardMedia)
  Vue.component(MdCardMediaActions.name, MdCardMediaActions)
  Vue.component(MdCardMediaCover.name, MdCardMediaCover)
  Vue.component(MdCardContent.name, MdCardContent)
  Vue.component(MdCardExpand.name, MdCardExpand)
  Vue.component(MdCardExpandTrigger.name, MdCardExpandTrigger)
  Vue.component(MdCardExpandContent.name, MdCardExpandContent)
  Vue.component(MdCardActions.name, MdCardActions)
}
