const routes = [
  {
    path: '/',
    component: () => import('pages/Index/index.vue')
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404/index.vue')
  });
}

export default routes;
