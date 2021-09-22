import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { tw } from 'twind'

const app = createApp(App)

app.config.globalProperties.tw = tw
app.use(store)
app.use(router)
app.mount('#app')
