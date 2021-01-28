<template>
  <section>
      test
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ArticleDetail',

  data () {
    return {
      id: this.$route.params.id
    }
  },
  mounted () {
    this.fetchArticleDetail(this.$route.params.id)
  },

  methods: {
    ...mapActions('articleSearch', ['fetchArticleDetail'])
  }


}
</script>

<style>

</style>