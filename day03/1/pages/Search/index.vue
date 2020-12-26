<template>
  <div>
    <TypeNav />
    <h2>Search组件</h2>
    <h2>route.params.keyword:{{keyword}}</h2>

  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyword']
}
</script>

<style lang="less" scoped>

</style>
