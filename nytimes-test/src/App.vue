<template>
  <div id="app">
    <top-bar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
export default {
  components: {
    TopBar
  }
}
</script>

<style>
html, body{
  font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  max-width: 1156px !important;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

@media (min-width: 1440px) {
  .container { padding: 0 0;}
}
</style>
