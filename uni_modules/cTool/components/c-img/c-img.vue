<template>
  <image :class="['c-img', customClass]" :mode="mode" :src="src" :style="[imgStyle, addStyle(customStyle)]"
         @click="click"></image>
</template>
<script>
import props from './props.js';

export default {
  name: "c-img",
  // #ifdef MP-WEIXIN
  options: {
    virtualHost: true, // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用 flex 属性
  },
  // #endif
  mixins: [props],
  computed: {
    imgStyle() {
      const style = {};
      const whr = this.whr.split('.');
      if (whr.length === 1) {
        style.height = whr[0] + 'rpx';
      } else if (whr.length === 2) {
        style.height = whr[1] + 'rpx';
      } else if (whr.length === 3) {
        style.height = whr[1] + 'rpx';
        style.borderRadius = whr[2] + 'rpx';
      }
      if (whr[0] === 'auto') {
        style.width = '100%';
      } else {
        style.width = whr[0] + 'rpx';
      }
      return style;
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
    addStyle() {
      if (this.customStyle) {
        if (typeof this.customStyle === 'string') {
          const style = {};
          this.customStyle.split(';').forEach(item => {
            if (item) {
              const [key, value] = item.split(':');
              style[key.trim()] = value.trim();
            }
          });
          return style;
        } else {
          return this.customStyle;
        }
      }
      return {};
    },
  },
};
</script>
<style lang="scss" scoped>
.c-img {
  display: block;
  flex-shrink: 0;
}
</style>
