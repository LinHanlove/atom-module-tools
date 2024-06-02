// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import '../../src/public/style/theme.css'
// import Preview from '../../src/components/Preview.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // app.component('Preview', Preview)
  }

}