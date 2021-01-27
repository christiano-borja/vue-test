<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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

    FeatureNews