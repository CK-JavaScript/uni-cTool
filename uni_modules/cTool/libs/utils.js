export default {
  /**
   * 处理单位
   * @param str 字符串
   * @returns {string} 处理后的字符串
   */
  unit(str = '') {
    if (str.match(/^[0-9]+$/)) {
      return str + 'rpx';
    } else {
      return str;
    }
  },
  /**
   * 处理自定义样式
   * @param style 自定义样式
   * @returns {{}|*} 对象或者字符串
   */
  customStyle(style = {}) {
    if (typeof style === 'string') {
      const _style = {};
      style.split(';').forEach(item => {
        if (item) {
          const [key, value] = item.split(':');
          _style[key.trim()] = value.trim();
        }
      });
      return _style;
    } else {
      return style;
    }
  },
};
