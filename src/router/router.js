import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/page/index.vue'
import login from '../login.vue'
import fault from '../404.vue'
import pageone from '../views/page/moduleone/pageone.vue'
import pageChartsBar from '../views/page/modulecharts/pageChartsBar.vue'
import betterScroll from '../views/page/moduletest/betterScroll.vue'
import checkbox from '../views/page/modulecomponent/checkbox.vue'
import drag from '../views/page/modulecomponent/drag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      /*
      * 登录页面
      * 时间:2017-07-12
      * 负责人：dingwang
      * */
      path: '/',
      name: 'login',
      component: login
    },
    {
      /*
       *下拉加载上拉刷新页面
       * 时间:2017-08-20
       * 负责人：dingwang
       * */
      path: '/better-scroll',
      name: 'better-scroll',
      component: betterScroll
    },
    {
      /*
       * 主页面
       * 时间:2017-07-13
       * 负责人：dingwang
       * 设想这下面放嵌套路由
       * */
      path: '/index',
      name: 'index',
      component: index,
      children: [
        /*
         * page1页面
         * 时间:2017-07-13
         * 负责人：dingwang
         * */
        {
          path: 'pageone',
          name: 'pageone',
          component: pageone
        },
        /*
         * page页面
         * 时间:2017-08-11
         * 负责人：dingwang
         * */
        {
          path: 'pageChartsBar',
          name: 'pageChartsBar',
          component: pageChartsBar
        },
        /*
         * pagen页面
         * 时间:2017-08-11
         * 负责人：dingwang
         * */
        {
          path: 'pageChartsLine',
          name: 'pageChartsLine',
          component: require('../views/page/modulecharts/pageChartsLine.vue')
        },
        /*
         * pagen页面
         * 时间:2017-09-07
         * 负责人：dingwang
         * */
        {
          path: 'vis',
          name: 'vis',
          component: require('../views/page/modulecharts/vis.vue')
        },
        /*
         * pagen页面
         * 时间:2017-09-11
         * 负责人：dingwang
         * */
        {
          path: 'slide',
          name: 'slide',
          component: require('../views/page/modulebasecomponent/slide.vue')
        },
        /*
         * pagen页面
         * 时间:2017-09-11
         * 负责人：dingwang
         * */
        {
          path: 'tables',
          name: 'tables',
          component: require('../views/page/modulebasecomponent/tables.vue')
        },
        /*
         * pagen页面
         * 时间:2017-09-11
         * 负责人：dingwang
         * */
        {
          path: 'form',
          name: 'form',
          component: require('../views/page/modulebasecomponent/form.vue')
        },
        /*
         * test页面
         * 时间:2017-09-12
         * 负责人：dingwang
         * */
        {
          path: 'test',
          name: 'test',
          component: require('../views/page/moduletest/test.vue')
        },
        /*
         * datepicker页面
         * 时间:2017-09-12
         * 负责人：dingwang
         * */
        {
          path: 'datepicker',
          name: 'datepicker',
          component: require('../views/page/moduletest/datepicker.vue')
        },
        /*
         * tabs页面
         * 时间:2017-09-12
         * 负责人：dingwang
         * */
        {
          path: 'tabs',
          name: 'tabs',
          component: require('../views/page/modulecomponent/tabs.vue')
        },
        /*
         * inputText页面
         * 时间:2017-09-12
         * 负责人：dingwang
         * */
        {
          path: 'inputtext',
          name: 'inputtext',
          component: require('../views/page/modulecomponent/inputtext.vue')
        },
        /*
         * inputText页面
         * 时间:2017-09-12
         * 负责人：dingwang
         * */
        {
          path: 'inputpassword',
          name: 'inputpassword',
          component: require('../views/page/modulecomponent/inputpassword.vue')
        },
        /*
         * dialog页面
         * 时间:2017-10-13
         * 负责人：dingwang
         * */
        {
          path: 'dialog',
          name: 'dialog',
          component: require('../views/page/modulecomponent/dialog.vue')
        },
        /*
         * checkbox页面
         * 时间:2018-12-27
         * 负责人：dingwang
         * */
        {
          path: 'checkbox',
          name: 'checkbox',
          component: require('../views/page/modulecomponent/checkbox.vue')
        },
        {
          path: 'drag',
          name: 'drag',
          component: require('../views/page/modulecomponent/drag.vue')
        }
      ]
    },
    {
      /*
       * 404页面
       * 时间:2017-07-12
       * 负责人：dingwang
       * */
      path: '/404',
      name: 'fault',
      component: fault
    }
  ]
})
