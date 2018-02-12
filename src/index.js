import './utils.js'
import { objectExtend } from './utils.js'
import VueAuthorize from './authorize.js'
import IsAuthorizedDirective from './directive.js'
import IsAuthorizedComponent from './component.js'

/**
 * VueAuthorize plugin
 * @param {Object} Vue
 */
function plugin(Vue, options) {
  if (plugin.installed) {
    return
  }

  Vue.directive('isAuthorized', IsAuthorizedDirective)
  Vue.component('isAuthorized', IsAuthorizedComponent)

  let vueAuthorizeInstance = null
  Object.defineProperties(Vue.prototype, {
    $authorize: {
      get() {
        if (!vueAuthorizeInstance) {
          // vue-authenticate module not found, throw error
          vueAuthorizeInstance = new VueAuthorize(options)
        }
        return vueAuthorizeInstance
      }
    }
  })
}

export default plugin
export { VueAuthorize }