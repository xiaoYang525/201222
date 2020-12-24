
import {reqCategoryList} from '@/api'
const state = {
    categoryList :[]
}
const mutations={
    RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList=categoryList.splice(0,15)
        console.log(state.categoryList)
    }
}
const actions={
//     async getCategoryList({commit}){
//         const result = await reqCategoryList()
//           if(result.code===200){
//           const categoryList =   result.data
//           commit('RECEIVE_CATEGORY_LIST',categoryList)
//           }
//       }
// }
 async getCategoryList ({commit}) {
    // 发异步ajax请求(调用接口请求函数)
    const result = await reqCategoryList()
    // 如果请求成功了, 得到数据提交给mutation
    if (result.code===200) {
      const categoryList = result.data
      commit('RECEIVE_CATEGORY_LIST', categoryList)
      
    }
  }
}


const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}