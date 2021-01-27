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
        
      </b-navbar-item>
    </template>
  </b-navbar>

  
</template>

<script>
export default {
  name: "TopBar"

}
</script>

<style>

</style>