<template>
  <view :style="[imgStyle]" class="c-btn">
    {{ text }}
  </view>
</template>

<script>
import props from './props.js';

export default {
  name: "c-btn",
  mixins: [props],
  computed: {
    imgStyle() {
      const whr = this.whr.split('.');
      return Object.assign({
        width: uni.$c.unit(whr[0]) || 'auto',
        height: uni.$c.unit(whr[1]) || '80rpx',
        borderRadius: uni.$c.unit(whr[2]) || '10rpx',
        fontSize: uni.$c.unit(this.fontSize),
        fontWeight: this.fontWeight,
        color: this.fontColor,
        backgroundColor: this.bgColor,
      }, uni.$c.customStyle(this.customStyle));
    },
  },
};
</script>

<style lang="scss" scoped>
.c-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
</style>
