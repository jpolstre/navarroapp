
const routes = [
  {
    path: '/:pagina?',
    component: () => import('layouts/FrontLayout.vue'),
    children: [
      { path: '', name:'Index', component: () => import('pages/EditPage.vue') }
    ]
  },
  // {
  //   path: '/admin',
  //   component: () => import('layouts/FrontLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/EditPage.vue') }
  //   ]
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
