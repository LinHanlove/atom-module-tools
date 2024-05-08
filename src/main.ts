import { createApp } from 'vue'
import './style.css'
import App from './App'
import { setupDirectivePlugins } from '@/special/Vue/Directive/index'

const app = createApp(App)

setupDirectivePlugins(app)

app.mount('#app')
