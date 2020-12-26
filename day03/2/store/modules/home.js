import {reqCategoryList,reqBannerList} from '@/api'


const state={
    categoryList:[],
    bannerList:[]
}

const mutations={
    RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList
    },
    RECEIVE_BANNER_LIST(state,bannerList){
        state.bannerList = bannerList
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
    async getbannerList({commit}){
        const result = await reqBannerList();
        const bannerList = result.data;
        if(result.code===200){
            commit('RECEIVE_BANNER_LIST',bannerList)
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