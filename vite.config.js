// import path from 'node:path'
// import { defineConfig } from 'vite'
// import vuePlugin from '@vitejs/plugin-vue'

// const base = '/'

// export default defineConfig(({ command, ssrBuild }) => ({
//   base,
// 	resolve: {
//     alias: {
//       "@": path.resolve(__dirname, 'src'),
// 			"@localconfig": path.resolve(__dirname, 'src'),
//     }
//   },
//   plugins: [
//     vuePlugin(),
    
//   ],
 
//   build: {
//     minify: true,
// 		target: 'esnext'
//   },
  
// }))

import path from 'node:path'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

const base = '/'

export default defineConfig({
  base,
  plugins: [
    vuePlugin(),
  ],
	resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "~": path.resolve(__dirname, 'src'),
			"@localconfig": path.resolve(__dirname, 'src'),
    }
  },
  build: {
    lib: {
      // the entry file that is loaded whenever someone imports
      // your plugin in their app
      entry: path.resolve(__dirname, 'src/index.js'),

            // the exposed global variable
      // is required when formats includes 'umd' or 'iife'
      name: 'VueMaterial',

      // the proper extensions will be added, ie:
         // name.js (es module)
         // name.umd.cjs) (common js module)
      // default fileName is the name option of package.json
      fileName: 'vue3-material'
    },
    rollupOptions: {

      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        },
        // preserveModules: true,
        dir: 'dist'
      },
      plugins: [
        copy({
          targets: [
            { src: 'src/css/default.css', dest: 'dist/theme' }
          ]
        })
      ]
      // plugins: [
      //   multi({
      //     include: ['src/components/**/*.js'],
      //   }),
      // ]
    },
    outDir: 'dist'
  }
})

// import { resolve } from 'path'
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     lib: {
//       entry: resolve(__dirname, 'lib/main.ts'),
//       name: 'VueComponentNpmExample',
//       // the proper extensions will be added
//       fileName: 'vue-component-npm-example'
//     },
//     rollupOptions: {
//       // make sure to externalize deps that shouldn't be bundled
//       // into your library
//       external: ['vue'],
//       output: {
//         // Provide global variables to use in the UMD build
//         // for externalized deps
//         globals: {
//           vue: 'Vue'
//         }
//       }
//     }
//   }
// })
