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
  mounted(){
    // getCategoryList().then(result=>{
    //   console.log('resule',result)
    // }).catch((error)=>{
    //   console.log(error)
    // })
    this.$store.dispatch('getCategoryList')
    // .splice(0,15)
  },
}

</script>

<style lang="less" scoped>

</style>
