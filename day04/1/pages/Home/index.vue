<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Floor v-for='floor in floors' :key="floor.id"  :floor='floor'/>
    
    <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  data(){
    return {
      
    }
  },
  computed:{
    ...mapState({floors:state=>state.home.floors})
  },
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand

  },
  mounted(){
    this.$store.dispatch('getrecommends');
    this.$store.dispatch('getfloors')
  }
}
</script>

<style lang="less" scoped>
  
</style>
