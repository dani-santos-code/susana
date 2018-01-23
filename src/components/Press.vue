<template lang="pug">
div
  AppHeader(:translations='translations' :fetchTranslations='fetchTranslations')
  section#press.press
    .container.container--narrow
      .about__wrapper
        h2(v-text='translations.menu.press')
      .press__links
        a(target='_blank' href='https://tribecafilminstitute.org/films/detail/1000_days')
          img(src='../assets/tribeca.png')
          |tribecafilminstitute.org
        a(target='_blank' href='http://remezcla.com/film/watch-4-renowned-chefs-make-mouth-watering-dishes-based-on-latin-american-films/')
          img(src='../assets/remezcla.png')
          | remezcla.com
        a(target='_blank' href='https://www.bloomberg.com/company/announcements/bloomberg-sponsors-tribeca-film-institute-sao-paulo-workshop/')
          img(src='../assets/bloomberg.png')
          | bloomberg.com
        a(target='_blank' href='http://miradasdoc.com/market2014/?p=609&lang=en')
          img(src='../assets/miradasdoc.png')
          | miradasdoc.com
        a(target='_blank' href='http://www.docsp.com/archivos/DOCSP_PROGRAMA_WEB.pdf')
          img(src='../assets/docsp.png')
          | docsp.com
        a(target='_blank' href='http://www.acampadoc.com/2014/07/acampadoc-2014-anuncia-seleccion-becas-cine-documental/')
          img(src='../assets/acampadoc.png')
          | acampadoc.com
        a(target='_blank' href='https://defeatmsa.org/defeat-msa-leads-kickstarter-for-new-documentary-about-msa/')
          img(src='../assets/defeatmsa.png')
          | defeatmsa.org
        a(target='_blank' href='http://www.resistenciamodulada.com/docsdf-2015-todo-lo-que-necesitas-saber/')
          img(src='../assets/resistenciamodulada.png')
          | resistenciamodulada.com
        a(target='_blank' href='http://acfa.com.br/noticias/filmcup-brasil-italia-divulga-projetos-selecionados-para-a-edicao-2014')
          img(src='../assets/filmcup.png')
          |  acfa.com.br
        a(target='_blank' href='https://oglobo.globo.com/esportes/nadadora-paralimpica-brasileira-corre-contra-relogio-19758054')
          img(src='../assets/oglobo.png')
          |  oglobo.globo.com
        a(target='_blank' href='https://oglobo.globo.com/esportes/susana-schnarndorf-vai-falar-com-belga-que-quer-eutanasia-20122176')
          img(src='../assets/oglobo.png')
          |  oglobo.globo.com
        a(target='_blank' href='http://www.conexao.com.br/colunas/cultura/documentarios/documentario-relata-a-vida-de-para-atleta-com-doenca-degenerativa-32-31963')
          img(src='../assets/conexao.png')
          |  conexaojornalismo.com.br
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
