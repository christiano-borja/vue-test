<template>
  <div class="home">
    <featured-news />
    <latest-news />
  </div>
</template>

<script>
import FeaturedNews from '@/components/FeaturedNews'
import LatestNews from '@/components/LatestNews'

export default {
  name: 'Home',
  components: {
    FeaturedNews,
    LatestNews
  }
}
</script>