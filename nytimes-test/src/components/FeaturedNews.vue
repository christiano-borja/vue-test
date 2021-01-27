<template>
  <section class="featured-news">
    <h2>{{ pageTitle }}</h2>
    <ul>
      <li v-for="(item, index) in mostPopular" :key="index" class="card">
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          <div class="card-image">
            <figure class="image">
              <img :src="item.multimedia[0].url" :alt="item.multimedia[0].copyright">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h3 class="title">{{ item.title }}</h3>
              <p class="subtitle">{{ item.abstract }}</p>
            </div>
          </div>
        </a>
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
      margin: 40px 0 10px;
      text-align: left;
      font-weight: bold;
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
