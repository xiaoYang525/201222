<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Floor v-for="floor in floors" :key='floor.id' :floor='floor'/>
    
    <Brand/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
export default {
  name: 'Home',
  mounted(){
    this.$store.dispatch('getFloors')
    this.$store.dispatch('getRecommends')
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

  }
}
</script>

<style lang="less" scoped>
  
</style>
