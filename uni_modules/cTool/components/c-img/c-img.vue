<template>
  <image :class="['c-img', customClass]" :mode="mode" :src="src" :style="[imgStyle]" @tap="onTap"></image>
</template>
<script>
import props from './props.js';

export default {
  name: "c-img",
  mixins: [props],
  computed: {
    imgStyle() {
      const whr = this.whr.split('.');
      return Object.assign({
        width: uni.$c.unit(whr[0]),
        height: uni.$c.unit(whr[1]),
        borderRadius: uni.$c.unit(whr[2]),
      }, uni.$c.customStyle(this.customStyle));
    },
  },
  methods: {
    onTap() {
      this.$emit('click');
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
