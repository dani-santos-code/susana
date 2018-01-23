<template lang="pug">
  section#contact.contact
    .container
      .about__wrapper
        h2(v-text='translations.menu.contact')
        .contact__col.contact__col--clubsoda
          div(v-for='item in translations.contact.clubsoda')
            h3(v-text='item.name')
            p(v-text='item.link')
            p(v-text='item.email')
        .contact__col.contact__col--companies
          div(v-for='item in translations.contact.companies')
            h3(v-text='item.name')
            p(v-text='item.link')
            p(v-text='item.email')
</template>

<script>
export default {
  name: 'Contact',

  props: {
    translations: Object
  }
}
</script>

<style lang="css">
</style>
