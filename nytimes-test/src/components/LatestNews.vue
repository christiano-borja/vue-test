<template>
  <section class="latest-news">
    <h2>{{ pageTitle }}</h2>
    <ul>
      
    </ul>
  </section>
</template>

<script>
export default {
  name: 'LatestNews',
  data () {
    return {
      pageTitle: "Latest News"
    }
  },

}
</script>

<style lang="scss" scoped>
  .latest-news{
    margin-top: 30px;
    h2{
      font-size: 1.75rem;
      margin: 40px 0 10px;
      text-align: left;
      font-weight: bold;
    }
  }
</style>

