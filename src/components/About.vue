<template lang="pug">
  section#about.about
    .container.container--narrow
      .about__wrapper
        h2(v-text='translations.menu.about')
        p(v-text='translations.about.text1')
        p(v-text='translations.about.text2')
    .about__logos-wrapper
      img.about__logos-img(src='../assets/logos-desktop.png')
</template>

<script>
export default {
  name: 'About',

  props: {
    translations: Object
  }
}
</script>

<style lang="css">
</style>
