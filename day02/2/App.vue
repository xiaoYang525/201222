<template>
 <div>
    <Header/>
   
  <router-view ></router-view>
  <Footer v-show='!$route.meta.isHideFooter'/>
 </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { reqCategoryList } from './api'
// import {getCategoryList} from './api'
export default {
  name: 'App',
  components:{
    Header,
    Footer,
    
  },
  mounted(){
    this.$store.dispatch('getCategoryList')
    console.log(123)
  }
}

</script>

<style lang="less" scoped>

</style>
