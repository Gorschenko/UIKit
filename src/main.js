import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'boxicons/css/boxicons.min.css'

Vue.config.productionTip = false
Vue.directive('closable', {
  bind(el, binding, vnode) {
    try {
      handleOutsideClick = (e) => {
        e.stopPropagation();
        const { handler, exclude, params, classExclude } = binding.value;
        let clickedOnExcludedEl = false;
        if (classExclude) {
          document.getElementsByClassName(classExclude).forEach(element => {
            if (element.contains(e.target)) {
              clickedOnExcludedEl = true;
            }
          });
        } else {
          clickedOnExcludedEl = exclude.some(refName => {
            if (!clickedOnExcludedEl) {
              const excludedEl = vnode.context.$refs[refName] || document.getElementById(refName);
              return excludedEl.contains(e.target);
            }
          });
        }
        if (!el.contains(e.target) && !clickedOnExcludedEl) {
          if (typeof handler === 'function') {
            handler.call(vnode.context, params);
          } else {
            vnode.context[handler]();
          }
        }
      };
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    } catch (e) {
      console.error(e);
    }
  },

  unbind() {
    document.removeEventListener('mousedown', handleOutsideClick);
    document.removeEventListener('touchstart', handleOutsideClick);
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
