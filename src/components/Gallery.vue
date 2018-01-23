<template lang='pug'>
  section#gallery.gallery
    .container
      h2(v-text='translations.menu.gallery')
      swiper.gallery-top(:options="swiperOptionTop", ref="swiperTop")
        swiper-slide
          img(src='../assets/17.jpg')
        swiper-slide
          img(src='../assets/1.jpg')
        swiper-slide
          img(src='../assets/2.jpg')
        swiper-slide
          img(src='../assets/3.jpg')
        swiper-slide
          img(src='../assets/4.jpg')
        swiper-slide
          img(src='../assets/5.jpg')
        swiper-slide
          img(src='../assets/6.jpg')
        swiper-slide
          img(src='../assets/7.jpg')
        swiper-slide
          img(src='../assets/8.jpg')
        swiper-slide
          img(src='../assets/9.jpg')
        swiper-slide
          img(src='../assets/10.jpg')
        swiper-slide
          img(src='../assets/11.jpg')
        swiper-slide
          img(src='../assets/12.jpg')
        swiper-slide
          img(src='../assets/13.jpg')
        swiper-slide
          img(src='../assets/14.jpg')
        swiper-slide
          img(src='../assets/15.jpg')
        swiper-slide
          img(src='../assets/16.jpg')
        swiper-slide
          img(src='../assets/20.jpg')
        swiper-slide
          img(src='../assets/21.jpg')
        swiper-slide
          img(src='../assets/22.jpg')
        swiper-slide
          img(src='../assets/23.jpg')
        .swiper-button-next.swiper-button-white(slot="button-next")
        .swiper-button-prev.swiper-button-white(slot="button-prev")
      swiper.gallery-thumbs(:options="swiperOptionThumbs", ref="swiperThumbs")
        swiper-slide
          img(src='../assets/1.jpg')
        swiper-slide
          img(src='../assets/2.jpg')
        swiper-slide
          img(src='../assets/3.jpg')
        swiper-slide
          img(src='../assets/4.jpg')
        swiper-slide
          img(src='../assets/5.jpg')
        swiper-slide
          img(src='../assets/6.jpg')
        swiper-slide
          img(src='../assets/7.jpg')
        swiper-slide
          img(src='../assets/8.jpg')
        swiper-slide
          img(src='../assets/9.jpg')
        swiper-slide
          img(src='../assets/10.jpg')
        swiper-slide
          img(src='../assets/11.jpg')
        swiper-slide
          img(src='../assets/12.jpg')
        swiper-slide
          img(src='../assets/13.jpg')
        swiper-slide
          img(src='../assets/14.jpg')
        swiper-slide
          img(src='../assets/15.jpg')
        swiper-slide
          img(src='../assets/16.jpg')
        swiper-slide
          img(src='../assets/20.jpg')
        swiper-slide
          img(src='../assets/21.jpg')
        swiper-slide
          img(src='../assets/22.jpg')
        swiper-slide
          img(src='../assets/23.jpg')
</template>

<script>
require('swiper/dist/css/swiper.css');

export default {
  name: 'Gallery',
  props: {
    translations: Object
  },
  data() {
    return {
      swiperOptionTop: {
        notNextTick: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10
      },
      swiperOptionThumbs: {
        notNextTick: true,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    const swiperTop = this.$refs.swiperTop.swiper
    const swiperThumbs = this.$refs.swiperThumbs.swiper
    swiperTop.params.control = swiperThumbs
    swiperThumbs.params.control = swiperTop
  }
}
</script>

<style scoped>
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .gallery-top {
    height: 90%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 10%!important;
    box-sizing: border-box;
    padding: 10px 0;
    max-height: 87px;
  }
  .gallery-thumbs .swiper-slide {
    width: 120px;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }

  .swiper-slide img {
    max-width: 100%;
  }
</style>
