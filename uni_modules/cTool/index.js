import mixin from "./libs/mixin.js";
import validate from "./libs/validate.js";
import utils from "./libs/utils.js";

const $c = {
  aaa: "aaa 的数据",
  ...validate,
  ...utils,
};

// $c挂载到uni对象上
uni.$c = $c;
const install = (Vue) => {
  // #ifndef APP-NVUE
  // 只有 vue，挂载到 Vue.prototype 才有意义，因为 nvue 中全局 Vue.prototype 和 Vue.mixin 是无效的
  Vue.prototype.$c = $c;
  Vue.mixin(mixin);
  // #endif
};
export default {
  install,
};
