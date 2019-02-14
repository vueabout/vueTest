// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import VueI18n from 'vue-i18n'
import zhLocale from 'iview/dist/locale/zh-CN'
import enLocale from 'iview/dist/locale/en-US'
import 'iview/dist/styles/iview.css'
import App from './App'
import router from './router/router'
import EN from '../i18n/en.json'
import ZH from '../i18n/zh.json'
import store from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */

// 全局事件代理
window.$$vueEvent = new Vue()
// 全局路由记录器
window.$$vueRouter = {}
window.SystemGlobe = {
  url: {
    // 查询字典
    // 暂定项目名为 @projectname
    dictionary: {
      queryByCode: '/project/dictionary/queryDicByCode',
      queryByType: '/project/distionary/queryDictionaryType'
    },
    // 登录相关
    loginforoms: {
      loginByBssaccount: '/project/partner/SassLogin',
      login: '',
      logout: ''
    },
    // 各个页面相关接口
    // page1
    page1: {
      getPageinfo: '/projectname/pageinfo',
      deletePageInfo: '/projectname/pageinfo/delete',
      changePageInfo: '/projectname/pageinfo/update',
      addPageInfo: '/projectname/pageinfo/save'
    },
    pagen: {
      getPageinfon: '/projectname/pageinfon',
      deletePageInfon: '/projectname/pageinfon/delete',
      changePageInfon: '/projectname/pageinfon/update',
      addPageInfon: '/projectname/pageinfon/save'
    },
    pageChartsBar: {
      getpageChartsBar: '/projectname/pageChartsBar'
    },
    pageChartsLine: {
      getpageChartsLine: '/projectname/pageChartsLine'
    }
  },
  devType: {},
  GlobeOption: {},
  component: {}
}

Vue.use(VueI18n)
Vue.use(iView)

Vue.config.lang = 'zh'

const messages = {
  en: {
    ...EN,
    ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  zh: {
    ...ZH,
    ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: Vue.config.lang, // set locale
  messages // set locale messages
})

Vue.use(iView, {
  i18n: (key, value) => i18n.vm._t(key, value)
})


new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App),       // iView相关
  template: '<App/>',
  components: { App }
})
