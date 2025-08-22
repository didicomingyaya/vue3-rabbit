//axios基础的封装
import axios from 'axios';

//接口基地址 接口超时时间
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
})
//基地址是API接口的公共前缀部分，通常是域名和基础路径的组合。它允许您为所有请求设置一个共同的基础URL。
//如果有多个基地址，可以执行多次axios.create()，创建多个axios实例，每个实例配置不同的baseURL。
//在需要发送请求的地方，导入对应的axios实例即可.如何导入

//拦截器

//请求拦截器
httpInstance.interceptors.request.use(config => {
    //请求发起会经过这里
    //config是当前请求的请求配置对象
    //比如config中有个属性很重要，headers请求头
    //我们可以通过给config添加属性来实现需求
    //比如config.headers.Authorization = 'xxxxxx' 统一添加token
    return config//放行请求
}, err => {
    //请求失败会经过这里
    return Promise.reject(err)
})

//响应拦截器
httpInstance.interceptors.response.use(res => {
    //响应成功会经过这里
    //res是响应对象
    //一般我们只需要res.data数据
    return res.data
}, err => {
    //响应失败会经过这里
    return Promise.reject(err)
})

export default httpInstance
//最后暴露httpInstance
//在其他地方使用时只需要导入这个封装好的axios实例即可