import {reqCategoryList,reqBannerList,
     reqRcommends,reqFloors} from '@/api'

const state={
    categoryList:[],
    bannerList:[],
    recommends:[],
    floors:[]
}

const mutations={
    RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList
    },
    RECEIVE_BANNER_LIST(state,bannerList){
        state.bannerList = bannerList
    },
    RECEIVE_FLOORS(state,floors){
        state.floors = floors
    },
    RECEIVE_RECOMMENDS(state,recommends){
        state.recommends = recommends
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
    },
    async getrecommends({commit}){
        const result = await reqRcommends();
        const recommends = result.data;
        if(result.code===200){
            commit('RECEIVE_RECOMMENDS',recommends)
        }
    },
    async getfloors({commit}){
        const result = await reqFloors();
        const floors = result.data;
        if(result.code===200){
            commit('RECEIVE_FLOORS',floors)
        }
    },
}
 
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}