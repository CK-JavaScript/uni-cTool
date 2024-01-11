export default {
  /**
   * @text {String} 按钮文字
   * @whr {String} 按钮宽高 (默认单位为rpx) 例: 100=w 100.50 = w&h 100.50.20 = w&h&r
   * @bgColor {String} bgColor 按钮背景色
   * @fontSize {String|Number} fontSize 字体大小
   * @fontWeight {String|Number} fontWeight 字体粗细
   * @fontColor {String} fontColor 字体颜色
   * @customClass {String} 自定义类名
   * @customStyle {String | Object} 自定义样式 例: 'color:red;font-size:20rpx;' | {color:red,fontSize:20rpx}
   *
   * @event {Function} click 点击事件
   */
  props: {
    text: {
      type: String,
      default: '按钮',
    },
    whr: {
      type: String,
      default: 'auto.80.10',
    },
    bgColor: {
      type: String,
      default: '#07c160',
    },
    fontSize: {
      type: [String, Number],
      default: 35,
    },
    fontWeight: {
      type: [String, Number],
      default: 'bold',
      validator(val) {
        return ['bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'].includes(val);
      },
    },
    fontColor: {
      type: String,
      default: '#333',
      validate(val) {
        return uni.$c.isColor(val);
      },
    },
  },
};
