<template>
  <view class="content">
    <view class="title">路由跳转：</view>
    <button size="mini" type="primary" @click="to">to：{{ toVal }}</button>
    <view class="title">图片使用：</view>
    <c-img src="/static/seat.png" whr="100px.100.10px"></c-img>
    <view class="title">按钮使用：</view>
    <c-btn bg-color="#07c160" font-size="40" text="按钮" whr="200px.80.80"></c-btn>
  </view>
</template>

<script>
export default {
  data() {
    return {
      toVal: '路由发送之前的数据',
    };
  },
  onLoad() {
  },
  methods: {
    to() {
      const _this = this;
      this.$to('/pages/index/demo', {
        send: {
          val: this.toVal,
        },
        response(data) {
          _this.toVal = data.val;
        },
      });
    },
  },
};
</script>

<style lang="scss">
.content {
  padding: 0 20rpx;
}

.title {
  margin: 20rpx 0 5px;
  color: #07c160;
  font-weight: bold;
  font-size: 40rpx;
}

</style>
