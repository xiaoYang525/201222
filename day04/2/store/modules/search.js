import {reqSearch} from '@/api'

const state={
    searchList:{}
}
const mutations={
    RECEIVE_SEARCH_LIST(state,searchList){
        state.searchList = searchList
    }
}
const actions={
    async getsearchList({commit},searchparams){
        
        const result = await reqSearch(searchparams);
       
        if(result.code===200){
            const searchList = result.data;
            commit('RECEIVE_SEARCH_LIST',searchList)
        }
    }
}
const getters={
    goodsList(state){
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    },
    attrsList(state){
        return state.searchList.attrsList|| []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}