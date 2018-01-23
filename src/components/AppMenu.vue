<template lang="pug">
div(v-on-click-outside='hideMenu')
  button.button.button--hamburguer(
    @click='show = !show'
    :class='{ "button--close": show }'
  )
    span.button__hidden-text Menu
  .menu(:class='{ "menu--is-hidden": !show }')
    .menu__wrapper( @click='hideMenu' )
      router-link.menu__item(to="/#home" v-text='translations.menu.home' v-smooth-scroll="{ duration: 500, offset: -40 }" )
      router-link.menu__item(to="/#about" v-text='translations.menu.about' v-smooth-scroll="{ duration: 500, offset: -40 }" )
      router-link.menu__item(to="/#gallery" v-text='translations.menu.gallery' v-smooth-scroll="{ duration: 500, offset: -40 }" )
      router-link.menu__item(to="/#crew" v-text='translations.menu.crew' v-smooth-scroll="{ duration: 500, offset: -40 }" )
      router-link.menu__item(to="/#contact" v-text='translations.menu.contact' v-smooth-scroll="{ duration: 500, offset: -40 }" )
      router-link.menu__item(to="press" v-text='translations.menu.press')
      router-link.menu__item(to="screenings" v-text='translations.menu.screenings')
      router-link.menu__item(to="msa" v-text='translations.menu.msa')

</template>

<script>
import { directive as onClickOutside } from 'vue-on-click-outside'

export default {
  name: 'AppMenu',

  props: {
    translations: Object
  },

  directives: {
    'on-click-outside': onClickOutside
  },

  data: () => ({
    show: false
  }),

  methods: {
    hideMenu() {
      this.show = false
    }
  }
}
</script>
