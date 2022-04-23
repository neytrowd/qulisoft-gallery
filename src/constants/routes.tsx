import React from 'react';
import Gallery from '../pages/gallery';
import Photo from '../pages/photo';

const routes = [
   {
      path: '/',
      component: <Gallery />,
   },
   {
      path: '/photo/:id',
      component: <Photo />,
   },
   {
      path: '*',
      component: <Gallery />,
   },
];

export default routes;
