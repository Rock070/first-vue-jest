import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { tw, setup } from 'twind'
import * as colors from 'twind/colors'

const app = createApp({
  render: () => h(App),
  setup () {
    setup({
      theme: {
        extend: {
          colors
        }
      }
    })
  }
})

app.config.globalProperties.tw = tw
app.use(store)
app.use(router)
app.mount('#app')
