//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {

        app.directive('img-lazy', {
            mounted(el, binding) {
                // Vue 3有两种API风格：Composition API（使用onMounted）和Options API（使用mounted）
                // 自定义指令遵循Options API的命名约定，以保持与Vue 2的兼容性
                //el: 指令绑定的元素 img
                //binding: 指令后面表达式的值 {value: '图片地址'}
                console.log('binding.value', binding.value);
                // 监听el是否进入视图
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log('isIntersecting', isIntersecting);
                        if (isIntersecting) {
                            el.src = binding.value
                            //原来错误出在这里,.src写成了.url
                            // 停止监听
                            stop();
                        }
                    })
            }
        })

    }
}

// export default lazyPlugin;
//为什么必须是export default,而不是export const lazyPlugin = { ... }
//如果写 export default → 对应 import xxx from ...。如果写 export const lazyPlugin → 对应 import { lazyPlugin } from ...
//第二种方式可以一次使用多个插件，如import { lazyPlugin, otherPlugin } from './directives'app.use(lazyPlugin)app.use(otherPlugin)

