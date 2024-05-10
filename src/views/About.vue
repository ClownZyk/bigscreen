<template>
  <div class="">
    <div class="container">
      <div class="child1">
        <!-- <img :src="require('@/assets/exit-fullscreen.svg')" alt=""> -->
      </div>
      <div class="child2"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {
    // console.log(require('@/assets/exit-fullscreen.svg'))
  }
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  width: 50px;
  .child1 {
    flex: 100px;
    height: 40px;
    background-color: red;
  }
  .child2 {
    flex: 1;
    height: 40px;
    background-color: blue;
  }
}
</style>
