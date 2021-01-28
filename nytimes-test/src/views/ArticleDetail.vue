<template>
  <section class="article-detail" v-if="getArticleDetail">
    <b-loading :is-full-page="isFullPage" :active.sync="isLocalLoading" :can-cancel="true" />
    <div class="content">
      <h1>{{ articleDetail.headline.main }}</h1>
      <h2>{{ articleDetail.headline.print_headline }}</h2>
      <div class="img-content" v-if="articleDetail.multimedia.length > 0">
        <img :src="`https://static01.nyt.com/${articleDetail.multimedia[0].url}`" alt="">
      </div>
      <p>{{articleDetail.lead_paragraph}}</p>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ArticleDetail',

  data () {
    return {
      isFullPage: false
    }
  },
  computed: {
    ...mapGetters('articleSearch',['getArticleDetail', 'isLocalLoading']),
    articleDetail () {
      return this.getArticleDetail.docs[0]
    }
  },
  mounted () {
    this.loadArticle()
  },

  methods: {
    ...mapActions('articleSearch', ['fetchArticleDetail']),
    loadArticle (){
      this.fetchArticleDetail(encodeURIComponent(this.$route.params.id))
    }
  }

}
</script>

<style lang="scss" scoped>
  .article-detail{
    padding-top: 50px;
    .img-content{
      margin: 30px 0 20px;
    }
    .content{
      max-width: 800px;
      margin: 0 auto;
      h2{
        font-size: 1.3rem;
        font-weight: 500;
        margin-top: 0;
      }
    }
  }
</style>