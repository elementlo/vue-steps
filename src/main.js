import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import VueI18n from "vue-i18n";
import queryString from "query-string";
import VueHighlightJS from "vue-highlightjs";
import "highlight.js/styles/github.css";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Auth);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.use(LocaleProvider);
Vue.use(VueI18n);
Vue.use(VueHighlightJS);
Vue.component("Authorized", Authorized);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1437182_t5qbpt2sp4.js" // 在 iconfont.cn 上生成
});

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS }
  }
});

Vue.component("IconFont", IconFont);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
