<template lang="pug">
  .header__wrapper
    header.header(v-sticky="true" sticky-offset="{ top: 0, bottom: 0 }" sticky-side="top")
      router-link(to="/#home" v-smooth-scroll="{ duration: 500, offset: -86 }" )
        img.header__logo(src='../assets/logo_white.png')
      div.header__translation
        button.header__translation-button(
          @click="fetchTranslations('en')"
          :class="{ active: translations.language == 'en' }"
        ) EN
        button.header__translation-button(
          @click="fetchTranslations('pt')"
          :class="{ active: translations.language == 'pt' }"
        ) PT
      AppMenu(:translations='translations')
</template>

<script>
import AppMenu from '@/components/AppMenu'

export default {
  name: 'AppHeader',

  props: {
    translations: Object,
    fetchTranslations: Function
  },

  components: {
    AppMenu
  },
}
</script>
