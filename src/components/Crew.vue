<template lang="pug">
  section#crew.crew
    .container
      h2(v-text='translations.menu.crew')
      ul.crew__list
        li.crew__list-item(v-for="person in translations.crew")
          img.crew__img(:src='getPicturePath(person.picture)')
          h3 {{ person.name }}
          h4 {{ person.occupation }}
          p {{ person.description }}
</template>

<script>
export default {
  name: 'Crew',

  props: {
    translations: Object
  },

  methods: {
    getPicturePath(name) {
      return require(`../assets/${name}`)
    }
  }
}
</script>
