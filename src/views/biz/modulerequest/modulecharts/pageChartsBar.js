/**
 * Created by wang.ding on 2017/8/11.
 */
import ajax from '../../../../libs/base/ajax'

class pageChartsBar {
  /**
   * Created by wang.ding on 2017/8/11.
   * 柱形图数据
   * @param {object} data
   * @returns {Promise}
   */
  getpageChartsBar (data) {
    return new Promise(function (resolve, reject) {
      ajax({
        url: window.SystemGlobe.url.pageChartsBar.getpageChartsBar,
        json: false,
        data: data,
        method: 'GET'
      }).then(function (data) {
        resolve(data)
      })
    })
  }

  /**
   * Created by wang.ding on 2017/9/12.
   * 折线图数据
   * @param {object} data
   * @returns {Promise}
   */
  getpageChartsLine (data) {
    return new Promise(function (resolve, reject) {
      ajax({
        url: window.SystemGlobe.url.pageChartsLine.getpageChartsLine,
        json: false,
        data: data,
        method: 'GET'
      }).then(function (data) {
        resolve(data)
      })
    })
  }
}

export default pageChartsBar
