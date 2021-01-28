<template>
  <b-navbar class="navbar is-black">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/poweredby_nytimes_200c.png" alt="Powered by NYTimes" >
          >
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="search-filter">
          <b-field>
            <b-input
              :lazy="true"
              v-model.trim="searchData"
              placeholder="Search"
              @input="searchArticles()"
            ></b-input>
          </b-field>
          <b-button
            @click="searchArticles()"
            type="is-light"
            class="search-button"
          >
            GO!
          </b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>

  
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "TopBar",

  data () {
    return {
      searchData: ''
    }
  },

  methods: {
    ...mapActions('articleSearch',['fetchSearchArticles']),
    async searchArticles () {
      await this.fetchSearchArticles(this.searchData)
      .then(() => {
        this.$router.push({ name: 'SearchResult', query: { q: this.searchData }})
      })
      .then(() => {
        this.searchData = ''
      })
    }
  }


}
</script>

<style lang="scss" scoped>
  .search-filter{
    display: flex;
    justify-content:flex-end;
  }
  .search-button{
    margin-left: 20px;
    font-weight: bold;
  }
</style>