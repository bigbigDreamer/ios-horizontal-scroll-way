import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postCssPxToRem from 'postcss-pxtorem'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    postcss:{
      plugins:[
        postCssPxToRem({
          rootValue:37.5,
          propList:['*'],
        })
      ]
    }
  }
})
