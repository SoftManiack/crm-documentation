import { createMemoryHistory, createRouter } from 'vue-router'

import GeneralView from '@/view/GeneralView.vue'
import MasterView from '@/view/MasterView.vue'
import SupplyView from '@/view/SupplyView.vue'
import UpravView from '@/view/UpravView.vue'

const routes = [
  { path: '/', component: GeneralView },
  { path: '/uprav', component: UpravView },
  { path: '/master', component: MasterView },
  { path: '/supply', component: SupplyView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
  
router.beforeEach((to, from, next) => {
  // ...
  // explicitly return false to cancel the navigation

  console.log(to)
  console.log(from)
  
  next()
})


export default router