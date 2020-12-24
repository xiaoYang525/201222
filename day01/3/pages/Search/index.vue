<template>
  <div>
    <h2>Search组件</h2>
    <h2>route.params.keyword:{{keyword}}</h2>
    <h2>route.query.content:{{content}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Search',
 props:['keyword','content']
}
</script>

<style lang="less" scoped>

</style>
