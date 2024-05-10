<template>
  <div class="item">
    <div class="title">
      <img src="../assets/item-h.png" alt="" />
      <div class="title-val cf-font">{{ title }}</div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.item {
  height: 295px;
  background: linear-gradient(135deg, rgba(10, 82, 159, 0.97) 0%, #063261 51%, #051634 100%);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  & + .item {
    margin-top: 16px;
  }
  .box {
    flex: 1;
  }

  .title {
    position: relative;
    margin-bottom: 4px;

    .title-val {
      position: absolute;
      left: 30px;
      top: 5px;
      font-size: 16px;
      color: #ffffff;
      text-shadow: 3px 3px 12px rgba(36, 223, 255, 0.5);
    }
  }
}
</style>
