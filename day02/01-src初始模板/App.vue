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
// import {getCategoryList} from './api'
export default {
  name: 'App',
  components:{
    Header,
    Footer,
    
  },
  
}

</script>

<style lang="less" scoped>

</style>
