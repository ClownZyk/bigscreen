<template>
  <div class="fullscreen-toggle" @click="toggleFullscreen">
    <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
  </div>
</template>
<script>
import { toggleFullscreen, debounce } from '@/utils/utils.js'
export default {
  data() {
    return {
      resizeHandler: null,
      isFullscreen: false
    }
  },
  created() {
    this.resizeHandler = debounce(() => {
      this.changeScreenfull()
    }, 100)
    window.addEventListener('resize', this.resizeHandler)
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    toggleFullscreen() {
      toggleFullscreen()
      this.changeScreenfull()
    },
    changeScreenfull() {
      this.isFullscreen = !!(window.innerHeight === screen.height && window.innerWidth === screen.width)
    }
  }
}
</script>
<style scoped lang="scss"></style>
