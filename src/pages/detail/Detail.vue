<template>
  <div>
    <header-scroll></header-scroll>
    <detail-header></detail-header>
    <detail-base-info></detail-base-info>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBaseInfo from './components/BaseInfo'
import HeaderScroll from './components/HeaderScroll'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBaseInfo,
    HeaderScroll
  }
}
</script>

<style scoped>
  .content {
    height: 15rem;
  }
</style>
