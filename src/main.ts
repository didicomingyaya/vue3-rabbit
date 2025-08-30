// import './assets/main.css'
import '@/styles/common.scss'

import { createApp } from 'vue'


import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useIntersectionObserver } from '@vueuse/core'

// import { getCategory } from "@/apis/testAPI.ts";
// getCategory().then(res => {
//     console.log("-------------------第一个getCategory-------------------");
//     console.log(res);
//     console.log("-------------------第二个getCategory-------------------");
// })
// console.log(getCategory());

const app = createApp(App)

app.directive('img-lazy', {
    mounted(el, binding) {
        // Vue 3有两种API风格：Composition API（使用onMounted）和Options API（使用mounted）
        // 自定义指令遵循Options API的命名约定，以保持与Vue 2的兼容性
        //el: 指令绑定的元素 img
        //binding: 指令后面表达式的值 {value: '图片地址'}
        console.log('binding.value', binding.value);
        // 监听el是否进入视图
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                console.log('isIntersecting', isIntersecting);
                if (isIntersecting) {
                    el.src = binding.value
                    //原来错误出在这里,.src写成了.url
                }
            })
    }
})


app.use(createPinia())
app.use(router)


app.mount('#app')
