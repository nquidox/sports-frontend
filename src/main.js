import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

const app = createApp(App)

app.config.globalProperties.$apiPath = 'http://127.0.0.1:8000'

app
    .use(router)
    .mount('#app')
