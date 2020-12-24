import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
 
const service = axios.create({
    baseURL:'http://39.99.186.36/api',
    timeout:200000
})

service.interceptors.request.use((config)=>{
    NProgress.start()
    return config
})
service.interceptors.response.use(
    response=>{
        NProgress.done()
        return response.data
    },
    error=>{
        NProgress.done()
        alert(error.message||'未知的错误类型')
        return Promise.reject(error)
    }
)

export default service