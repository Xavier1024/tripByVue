<template>
  <div class="">
      <div class="item" v-for="(item, index) of list" :key="index">
          <div class="item-title border-bottom">
              <span class="item-title-icon"></span>
                {{item.title}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
item-title-icon{
}
.item-title{
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
}
</style>
