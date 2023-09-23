import './lib/joyfulLib.scss'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.scss'
import { router } from './router'
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.mount('#app')