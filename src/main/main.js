import { createApp as create, watch } from 'vue'

import App from '@/main/App.vue' 
import VueMaterial from '../index.js';

export async function createApp(url) {

  //const app = createSSRApp(App)
  const app = create(App)
  app.use(VueMaterial)

	return new Promise((resolve) => {
		resolve({ app });
	});
	
  
}
