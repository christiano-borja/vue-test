<template>
  <section class="featured-news">
    <h2>{{ pageTitle }}</h2>
    <ul>
      <li v-for="(item, index) in mostPopular" :key="index" class="card">
        <router-link
            :to="{
              name: 'ArticleDetail',
              params: { id: item.uri }
            }"
          >
          <div class="card-image">
            <figure class="image">
              <img :src="item.media[0]['media-metadata'][2].url" :alt="item.title">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h3 class="title">{{ item.title }}</h3>
              <p class="subtitle">{{ item.abstract }}</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FeaturedNews',
  data () {
    return {
      pageTitle: "Featured News"
    }
  },

  mounted () {
    this.fetchFeaturedNews()
  },

  computed: {
    ...mapGetters('featuredNews', ['getNewsList']),
    mostPopular () {
      return this.getNewsList.slice(0, 3)
    }

  },

  methods: {
    ...mapActions('featuredNews', ['fetchFeaturedNews'])
  }
}
</script>

<style lang="scss" scoped>
  .featured-news{
    h2{
      font-size: 2rem;
      margin: 70px 0 10px;
      text-align: left;
      font-weight: bold;
      color: #fff;
      background-color: #000000;
      padding: 5px 15px;
      border-radius: 5px 100px 0 5px;
    }
    ul{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
        margin: 15px 15px 15px 0;
        width: 350px;
        h3{
          font-size: 1.35rem;
        }
        p.subtitle{
          margin-top: 10px;
          font-size: 1rem;
        }
      }
    }
  }
</style>
