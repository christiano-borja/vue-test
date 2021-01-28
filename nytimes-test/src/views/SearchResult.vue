<template>
  <section class="search-results">
    <b-loading :is-full-page="isFullPage" :active.sync="isLocalLoading" :can-cancel="true" />
    <h2>{{ pageTitle }}</h2>
    <ul>
      <li v-for="(item, index) in articlesList" :key="index">
        <a :href="item.web_url" target="_blank" rel="noopener noreferrer">
          <h3>{{item.headline.main}}</h3>
          <p>{{item.abstract}}</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SearchResults',
  data () {
    return {
      pageTitle: 'Results',
      isFullPage: false,
      query: this.$route.query
    }
  },
  computed: {
    ...mapGetters('articleSearch', ['getArticlesList', 'isLocalLoading']),

    articlesList () {
      return this.getArticlesList.docs
    }
  },
  mounted () {
    if (this.query) this.searchArticles()
  },
   methods: {
    ...mapActions('articleSearch',['fetchSearchArticles']),
    searchArticles () {
      this.fetchSearchArticles(this.query.q)
    }
  }

}
</script>

<style lang="scss" scoped>
  .search-results{
    h2{
      font-size: 2rem;
      margin: 70px 0 30px;
      text-align: left;
      font-weight: bold;
      color: #fff;
      background-color: #000000;
      padding: 5px 15px;
      border-radius: 5px 100px 0 5px;
    }
    li{
      margin-bottom: 30px;
      padding-bottom: 10px;
      border-bottom: 0.7px dotted #c4c4c4;
      text-align: left;
      ::v-deep a{
        color: black;
        &:hover{
          text-decoration: underline;
        }
      }
    }
    h3{
      font-size: 1rem;
    }
    p{
      font-size: 0.85rem;
    }
  }
</style>