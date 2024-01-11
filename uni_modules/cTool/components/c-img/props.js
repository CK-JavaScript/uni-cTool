export default {
  /**
   * @src {String} 图片地址
   * @whr {String} 图片宽高 (默认单位为rpx) 例: 100=w 100.50 = w&h 100.50.20 = w&h&r
   * @mode {String} mode 裁剪模式，见官网说明 （默认 'aspectFill' ）
   * @customClass {String} 自定义类名
   * @customStyle {String | Object} 自定义样式 例: 'color:red;font-size:20rpx;' | {color:red,fontSize:20rpx}
   *
   * @event {Function} click 点击事件
   */
  props: {
    src: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      default: 'aspectFill',
    },
    whr: {
      type: String,
      default: '100.100.0',
    },
  },
};
