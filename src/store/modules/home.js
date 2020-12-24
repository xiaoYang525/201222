import {reqCategoryList} from '@/api'

const state={
    categoryList:[]
}

const mutations={
    RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList
    }
}

const actions={
    async getCategoryList({commit}){
        const result = await reqCategoryList()
        const categoryList = result.data
        if(result.code===200){
            commit('RECEIVE_CATEGORY_LIST',categoryList)
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