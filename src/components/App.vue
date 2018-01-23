<template lang="pug">
  #app
    .main-wrapper( v-if='translations !== null' sticky-container)
      router-view(:translations='translations' :fetchTranslations='fetchTranslations')
      footer.footer
        p 
          | {{translations.footer.rights}}
          a.footer__link(href='https://www.linkedin.com/in/dani-santos-code/' target='_blank') Dani Santos
</template>

<script>
import get from 'axios'

export default {
  name: 'app',

  data: () => ({
    translations: null,
  }),

  methods: {
    fetchTranslations(locale) {
      var self = this;
      try {
        get(`/static/${locale}.json`)
            .then(function(response) {
              self.translations = response.data;
           })
            .catch(function(error) {
              console.error(error);
            });
      }
      catch (error) {
        console.error(error);
      }
    } 
  },

  beforeMount() {
    this.fetchTranslations('en')
  },
}
</script>

<style lang='scss'>
  @import '../scss/main';
</style>
