import { createApp } from 'vue'
import App from './App.vue'
import './main.scss'
import router from './router'
import axios from 'axios'
import AxiosInterceptor from "./security/AxiosInterceptor";

AxiosInterceptor.init()
axios.defaults.baseURL =import.meta.env.VITE_AXIOS_BASEURL
const app = createApp(App)

app.config.globalProperties.$globalVariable = 'mock';

app.use(router)

app.mount('#app')
