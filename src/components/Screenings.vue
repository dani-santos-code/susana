<template lang="pug">
div
  AppHeader(:translations='translations' :fetchTranslations='fetchTranslations')
  section#screenings.screenings
    .container.container--narrow
      .about__wrapper
        h2(v-text='translations.menu.screenings')
        p(v-text='translations.screeningtext.infoscreening')
</template>

<script>
import AppHeader from "@/components/AppHeader"

export default {
  name: 'Screenings',

  props: {
    translations: Object,
    fetchTranslations: Function
  },

  components: {
    AppHeader
  }
}
</script>
