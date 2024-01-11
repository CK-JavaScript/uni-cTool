<template>
  <view class="demo">
  </view>
</template>
<script>
export default {
  name: "demo",
  onLoad() {
    this.$from({
      response(data) {
        console.log("# -> 接收父路由传递的数据", data);
      },
      send: {
        val: '这是子路由返回的数据',
      },
    });
  },
};
</script>
<style scoped>

</style>
