import React from 'react';

const routes = [
  { path: '/home', component: React.lazy(() => import('../views/Home')) },
  { path: '/sample', exact: true, component: React.lazy(() => import('../views/samples')) },
  { path: '/sample/page1', component: React.lazy(() => import('../views/samples/Page1')) },
  { path: '/sample/page2', component: React.lazy(() => import('../views/samples/Page2')) },
];

export default routes;
