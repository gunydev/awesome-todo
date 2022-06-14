import { createApp } from 'vue'
import App from './pages/Index.vue'
import { createPinia } from 'pinia'
import './index.css'

const app = createApp(App)

// bundle plugin
app.use(createPinia())

app.mount('#app')
