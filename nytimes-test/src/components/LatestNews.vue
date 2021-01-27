<template>
  <section class="latest-news">
    <b-loading :is-full-page="isFullPage" :active.sync="isLocalLoading" :can-cancel="true" />
    <h2>{{ pageTitle }}</h2>
    <div class="filter-container">
      <b-radio v-model="section"
        name="name"
        native-value="all">
        All
      </b-radio>
      <b-radio v-model="section"
        name="name"
        native-value="business">
        Business
      </b-radio>
      <b-radio v-model="section"
        name="name"
        native-value="world">
        World
      </b-radio>
      <b-radio v-model="section"
        name="name"
        native-value="arts">
        Arts
      </b-radio>
      <b-button type="is-primary" @click="loadNews()">Filter</b-button>
    </div>
    <ul>
      <li v-for="(item, index) in paginatedItems" :key="index">
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          <h3 class="title">{{ item.title }}</h3>
          <p class="subtitle">{{ item.abstract }}</p>
        </a>
      </li>
      <b-pagination
        :total="totalItems.length"
        v-model="current"
        :range-before="rangeBefore"
        :range-after="rangeAfter"
        :order="order"
        :size="size"
        :simple="isSimple"
        :rounded="isRounded"
        :per-page="perPage"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page">
        </b-pagination>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LatestNews',
  data () {
    return {
      isFullPage: false,
      pageTitle: "Latest News",
      totalItems: [],
      current: 1,
      perPage: 9,
      rangeBefore: 3,
      rangeAfter: 1,
      order: '',
      size: '',
      isSimple: false,
      isRounded: true,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      section: 'all'
    }
  },

  created() {
    this.loadNews()
  },

  computed: {
    ...mapGetters('latestNews', ['getLatestNewsList', 'isLocalLoading']),
    total() {
      return this.totalItems.length
    },
    paginatedItems() {
      let page_number = this.current-1
      return this.totalItems.slice(page_number * this.perPage, (page_number + 1) * this.perPage); 
    }
  },

  methods: {
    ...mapActions('latestNews', ['fetchLatestNews']),

    latestList () {
      this.getLatestNewsList.results.map(e => this.totalItems.push(e))
    },
    async loadNews () {
      await this.fetchLatestNews(this.section)
      .then(() => {
        this.totalItems = []
      })
      .then(() => {
        this.latestList()
      })
      
    }
  }

}
</script>

<style lang="scss" scoped>
  .latest-news{
    margin-top: 30px;
    h2{
      font-size: 1.5rem;
      margin: 40px 0 20px;
      text-align: left;
      font-weight: bold;
      color: #fff;
      background-color: rgb(46, 46, 46);
      padding: 5px 15px;
      border-radius: 5px 100px 0 5px;
    }
    li{
      margin-bottom: 30px;
      padding-bottom: 10px;
      border-bottom: 0.7px dotted #c4c4c4;
    }
    h3{
      font-size: 1rem;
      text-align: left;
    }
    p{
      font-size: 0.85rem;
      text-align: left;
    }
    .filter-container{
      display: flex;
      justify-content: flex-end;
      vertical-align: middle;
      margin-bottom: 40px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e7e7e7;
      ::v-deep .control-label{
        font-size: 0.9rem;
      }
      ::v-deep .button{
        margin-left: 40px;
      }
    }
  }
</style>

