
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/signup',
    component: () => import('components/TheSignUp'),

  },
  {
    path: '/login',
    component: () => import('components/TheLogin'),

  },
  {
    path: '/desktop',
    component: () => import('components/Desktop'),

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
