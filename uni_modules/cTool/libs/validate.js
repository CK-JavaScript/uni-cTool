export default {
  /**
   * 判断是否为颜色值
   * @param color 颜色值
   * @returns {boolean} 是否与颜色值
   */
  isColor(color) {
    if (color) {
      return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(color);
    } else {
      return false;
    }
  },
};
