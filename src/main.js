import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import axios from "axios";

const app = createApp(App)

axios.defaults.baseURL = 'http://127.0.0.1:8000'

app
    .use(router)
    .mount('#app')
