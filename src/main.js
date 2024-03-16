import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './tailwind.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

// Mount the app to the DOM
app
    .use(router)
    .use(Antd)
    .mount('#app')