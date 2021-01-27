<template>
  <section class="featured-news">
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
              <h2 class="title">{{ item.title }}</h2>
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
    font-size: 16px;
    ul{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li{
        margin: 15px;
        width: 350px
      }
    }
  }
</style>
