<template lang="pug">
.intro#home
  p.intro__director(v-text='translations.intro.director')
  parallax(:speedFactor='0.5' sectionClass='intro__parallax')
    img.intro__img(src="../assets/intro-background.jpg")
  img.intro__logo(src="../assets/logo.png")
  a.menu__item(href="/#about" v-smooth-scroll="{ duration: 500, offset: -40 }")
    img.intro__arrow(src="../assets/arrow.svg")
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'Intro',

  components: {
    Parallax
  },

  props: {
    translations: Object,
  }
}

</script>

<style scoped>
.Masthead__image.is-parallax>img {
  object-position: top left;
}
</style>
