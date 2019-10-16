<template>
  <div>
    <header-scroll></header-scroll>
    <detail-header></detail-header>
    <detail-base-info></detail-base-info>

    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBaseInfo from './components/BaseInfo'
import HeaderScroll from './components/HeaderScroll'
import DetailList from './components/List'
export default {
  name: 'Detail',
  data () {
    return {
      list: [{
        title: '成人票'
      },
      {
        title: '儿童票'
      }]
    }
  },
  components: {
    DetailHeader,
    DetailBaseInfo,
    HeaderScroll,
    DetailList
  }
}
</script>

<style scoped>
  .content {
    height: 15rem;
  }
</style>
