import { createApp } from 'vue'
import App from './App.vue'
import './main.scss';
import router from './router'

const app = createApp(App)

app.config.globalProperties.$filters = {
    formatCurrency(value: number) {
        return new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(value / 100);
    }
}

app.config.globalProperties.$globalVariable = 'mock';

app.use(router)

app.mount('#app')
