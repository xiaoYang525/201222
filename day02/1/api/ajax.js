import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner:false});

const service = axios.create({
   
    // baseURL: 'http://localhost:8080/api',
    baseURL: 'http://39.99.186.36/api',
    timeout:20000
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
        return Promise.reject(error)
    }
)
export default service