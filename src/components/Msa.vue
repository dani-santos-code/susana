<template lang="pug">
div
  AppHeader(:translations='translations' :fetchTranslations='fetchTranslations')
  section#Msa.msa
    .container.container--narrow
      .about__wrapper
        h2(v-text='translations.menu.msa')
        p(v-text='translations.msa.description')
        .msa__links(v-for='item in translations.msa.links')
          p
            a(:href='item' v-text='item')
</template>

<script>
import AppHeader from "@/components/AppHeader"

export default {
  name: 'Msa',

  props: {
    translations: Object,
    fetchTranslations: Function
  },

  components: {
    AppHeader
  }
}
</script>

</script>
