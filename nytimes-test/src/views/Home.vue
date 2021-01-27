<template>
  <div class="home">
    <featured-news />
  </div>
</template>

<script>
import FeaturedNews from '@/components/FeaturedNews'

export default {
  name: 'Home',
  components: {
    FeaturedNews
  }
}
</script>