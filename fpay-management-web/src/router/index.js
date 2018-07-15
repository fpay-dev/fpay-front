import Vue from 'vue'
import Router from 'vue-router'
import Cashier from '@/views/cashier/Cashier'
import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      // name: 'Cashier',
      component: Main,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'cashier/:platform/business/:businessId',
          component: Cashier
        }
      ]
    }
  ]
})
