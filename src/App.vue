<template>
  <div id="app">
    <v-scale-screen width="1920" height="1080">
      <div class="gem-container">
        <router-view />
      </div>
    </v-scale-screen>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
