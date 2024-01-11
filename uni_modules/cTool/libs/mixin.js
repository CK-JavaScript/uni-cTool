module.exports = {
  // 定义每个组件都可能需要用到的外部样式以及类名
  props: {
    // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
    customStyle: {
      type: [Object, String],
      default: () => ({}),
    },
    customClass: {
      type: String,
      default: '',
    },
    // 跳转的页面路径
    url: {
      type: String,
      default: '',
    },
    // 页面跳转的类型
    linkType: {
      type: String,
      default: 'navigateTo',
    },
  },
  data() {
    return {};
  },
  methods: {
    // 跳转某一个页面
    openPage(urlKey = 'url') {
      const url = this[urlKey];
      if (url) {
        // 执行类似uni.navigateTo的方法
        uni[this.linkType]({
          url,
        });
      }
    },
    // 阻止事件冒泡
    preventEvent(e) {
      e && typeof (e.stopPropagation) === 'function' && e.stopPropagation();
    },
    // 空操作
    noop(e) {
      this.preventEvent(e);
    },
  },
  onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
};
