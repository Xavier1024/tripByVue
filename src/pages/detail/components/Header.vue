<template>
  <div>
    <div class="header">
      <div class="img-wrapper" @click="handleImgClick">
        <img
          src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
          class="detail-img"
        />
      </div>
      <div class="detail-info">
        <div class="img-number">
          <span class="iconfont">&#xe626;</span>10
        </div>
        <div class="info">故宫(AAAAA景区)</div>
      </div>
    </div>
    <common-gallery :imgs="imgs" :currentImg="1" v-show="showGallery" @close="closeGallery"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailHeader',
  components: {
    CommonGallery
  },
  data () {
    return {
      showAbs: true,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg',
        'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg',
        'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg',
        'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png',
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg',
        'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg',
        'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg',
        'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png',
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg',
        'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg',
        'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg',
        'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png',
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg',
        'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg',
        'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg',
        'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png'
      ],
      showGallery: false
    }
  },
  methods: {
    handleImgClick () {
      this.showGallery = true
    },
    closeGallery () {
      this.showGallery = false
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/variable.styl';

.header {
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  position relative
  overflow: hidden;

  .detail-img {
    width: 100%;
  }

  .detail-info {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding-left: 0.2rem;

    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      background: linear-gradient(top, transparent, #000);
      z-index: 1;
    }

    .img-number {
      display: inline-block;
      padding: 0 0.26rem;
      border-radius: 0.1rem;
      line-height: 0.36rem;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .info {
      position: relative;
      font-size: 0.36rem;
      line-height: 0.9rem;
      height: 0.9rem;
      color: #fff;
      z-index: 2;
    }
  }
}
</style>
