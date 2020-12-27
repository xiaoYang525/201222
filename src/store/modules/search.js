/* 
管理搜索模块的数据
*/
import {
    reqSearch
  } from '@/api'
  
  const state = {
    searchList: {}, // 搜索出的商品列表相关数据的对象 
  }
  
  const mutations = {
    /* 
    接收保存商品列表相关数据对象
    */
    RECEIVE_SEARCH_LIST (state, searchList) {
      state.searchList = searchList
    }
  }
  
  const actions = {
  
    /* 
    根据指定的搜索条件, 异步获取商品列表的action
    */
    async getsearchList ({commit}, searchParams) {
      
      // 1. ajax请求, 获取数据
      const result = await reqSearch(searchParams)
      // 2. 如果成功, 提交给mutation
      if (result.code===200) {
        const searchList = result.data
        commit('RECEIVE_SEARCH_LIST', searchList)
      }
    }
  }
  const getters = {
    /* 商品分页列表 */
    goodsList (state) {
      return state.searchList.goodsList || []
    },
  
    /* 品牌列表 */
    trademarkList (state) {
      return state.searchList.trademarkList || []
    },
  
    /* 属性列表 */
    attrsList (state) {
      return state.searchList.attrsList || []
    }
  }
  
  export default {
    state,
    mutations,
    actions,
    getters
  }