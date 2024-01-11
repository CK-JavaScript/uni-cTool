export default {
  // 小程序平台特有属性
  // #ifdef MP-WEIXIN
  options: {
    virtualHost: true, // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
  },
  // #endif
  
  // 定义每个组件都可能需要用到的外部样式以及类名
  props: {
    // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
    customStyle: {
      type: [Object, String],
      default: () => ({}),
    },
    // 每个组件都有的父组件传递的类名，字符串形式
    customClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {
    /**
     * 跳转页面
     * @param url 跳转地址
     * @param data 传递给跳转页面的数据
     * @param _send // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
     */
    $to() {
      const {
        send = {}, response = function () {
        }, type = 'navigateTo',
      } = arguments[1] || {};
      if (type === 'navigateTo') {
        uni[type]({
          url: arguments[0],
          success(res) {
            res.eventChannel.emit("send", send);
          },
          events: {
            response,
          },
        });
      } else {
        uni[type]({
          url: arguments[0],
        });
      }
    },
    /**
     * 向起始页通过事件传递数据
     * @param response 获取上一页面通过传送到当前页面的数据
     * @param send 向上一页面传送数据
     */
    $from({response = undefined, send = undefined}) {
      const eventChannel = this.getOpenerEventChannel();
      response && eventChannel.on('send', response);
      send && eventChannel.emit('response', send);
    },
  },
};
