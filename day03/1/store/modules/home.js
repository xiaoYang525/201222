import {reqBannerList, reqCategoryList} from '@/api'

const state={
    categoryList:[],
    BannerList:[]
}

const mutations={
    RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList
    },
    RECEIVE_BANNER_LIST(state,BannerList){
        state.BannerList = BannerList
    }
}

const actions={
    async getCategoryList({commit}){
        const result = await reqCategoryList()
        const categoryList = result.data
        if(result.code===200){
            commit('RECEIVE_CATEGORY_LIST',categoryList)
        }
    },
    async getBannerList({commit}){
        const result = await reqBannerList();
        const BannerList = result.data;
        if(result.code===200){
            commit('RECEIVE_BANNER_LIST',BannerList)
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