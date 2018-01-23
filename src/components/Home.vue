<template lang="pug">
div
  Intro(:translations='translations')
  AppHeader(:translations='translations' :fetchTranslations='fetchTranslations')
  About(:translations='translations')
  img.section-img(src='../assets/section1.jpg')
  Gallery(:translations='translations')
  img.section-img(src='../assets/section2.jpg')
  Crew(:translations='translations')
  img.section-img(src='../assets/section3.jpg')
  Contact(:translations='translations')
</template>

<script>
import Intro from "@/components/Intro"
import AppHeader from "@/components/AppHeader"
import About from "@/components/About"
import Gallery from "@/components/Gallery"
import Crew from "@/components/Crew"
import Contact from "@/components/Contact"

export default {
  name: 'Home',

  components: {
    Intro,
    AppHeader,
    About,
    Gallery,
    Crew,
    Contact,
  },

  props: {
    translations: Object,
    fetchTranslations: Function

  }
}
</script>
