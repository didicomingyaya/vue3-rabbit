import './assets/main.css'

import { createApp } from 'vue'


import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { getCategory } from "@/apis/testAPI.ts";
getCategory().then(res => {
    console.log("-------------------第一个getCategory-------------------");
    console.log(res);
    console.log("-------------------第二个getCategory-------------------");
})
console.log(getCategory());

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')
