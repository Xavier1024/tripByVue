<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont detail-back" v-show="showAbs">&#xe624;</span>
    </router-link>
    <div class="detail-header" v-show="!showAbs" :style="styleOptions">
      <router-link to="/">
        <span class="iconfont back">&#xe624;</span>
      </router-link>
      <span class="title">故宫</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderScroll',
  data () {
    return {
      showAbs: true,
      styleOptions: {
        opacity: 0
      }
    }
  },
  methods: {
    scrollHeader () {
      console.log('scroll')
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let t = top / 140
        if (t > 1) {
          t = 1
        }
        this.styleOptions.opacity = t
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.scrollHeader)
  },
  deactivated () {
    window.removeEventListener('scroll', this.scrollHeader)
  }

}
</script>

<style scoped lang="stylus">
@import '~styles/variable.styl';
.header {
    position relative
    z-index:10
}
.detail-back {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  width: 0.72rem;
  height: 0.72rem;
  line-height: 0.72rem;
  border-radius: 0.36rem;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 0.36rem;
  background-color: rgba(0, 0, 0, 0.5);
}

.detail-header {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: $bgColor;
  width: 100%;
  height: $topHeight;
  line-height: $topHeight;
  text-align: center;

  .title {
    color: #fff;
    font-size: 0.36rem;
  }

  .back {
    position: absolute;
    left: 0;
    width: 0.88rem;
    color: #ffffff;
    font-size: 0.34rem;
    font-weight: bold;
    text-align: center;
  }
}
</style>
