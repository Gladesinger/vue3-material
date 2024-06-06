# vue3-material
A collection of vue material components (https://github.com/vuematerial/vue-material) converted to vue3. Special thanks to the (https://github.com/mikimoresi/vue3-material) for providing some of the components.
Currently converted the following components:
- Button
- Card
- Dialog
- Datepicker
- Tabs
- Icon
- Progress

To install use 
```npm i @gladesinger/vue3-material```

Then set up a plugin or import components directly. Example of the plugin for nuxt 3 ```plugins/vue3-material.js```:
```
import { defineNuxtPlugin } from '#app';
import VueMaterial from '@gladesinger/vue3-material';
import '@gladesinger/vue3-material/dist/style.css';
import '@gladesinger/vue3-material/dist/theme/default.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueMaterial);
})
```

Then in nuxt.config.ts:
```
plugins: [
    '~/plugins/vue-material.js'
]
```

Or you can import the components separately:
```
import { defineNuxtPlugin } from '#app';
import { MdCard, MdRipple, MdButton, MdIcon, MdProgress, MdTabs, MdDatepicker, MdDialog, MdContent } from '@gladesinger/vue3-material';
import '@gladesinger/vue3-material/dist/style.css';
import '@gladesinger/vue3-material/dist/theme/default.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MdCard);
  nuxtApp.vueApp.use(MdRipple);
  nuxtApp.vueApp.use(MdButton);
  nuxtApp.vueApp.use(MdIcon);
  nuxtApp.vueApp.use(MdProgress);
  nuxtApp.vueApp.use(MdTabs);
  nuxtApp.vueApp.use(MdDatepicker);
  nuxtApp.vueApp.use(MdDialog);
  nuxtApp.vueApp.use(MdContent);
})
```