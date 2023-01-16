import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Developers = lazy(() => import('../pages/academy/Developers'));
const Testers = lazy(() => import('../pages/academy/Testers'));
const FrontEnd = lazy(() => import('../pages/academy/FrontEnd'));
const Kids = lazy(() => import('../pages/academy/Kids'));
const Register = lazy(() => import('../pages/Register'));
const Questions = lazy(() => import('../pages/Questions'));
const Media = lazy(() => import('../pages/Media'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const routes = {
  home: '/',
  developers: '/academy/developers',
  testers: '/academy/testers',
  frontEnd: '/academy/front-end',
  kids: '/academy/kids',
  register: '/register',
  questions: '/questions',
  media: '/media',
  aboutUs: '/aboutus',
  notFound: '*',
};

export const routeConfig = {
  home: {
    path: routes.home,
    component: Home,
  },
  developers: {
    path: routes.developers,
    component: Developers,
  },
  testers: {
    path: routes.testers,
    component: Testers,
  },
  frontEnd: {
    path: routes.frontEnd,
    component: FrontEnd,
  },
  kids: {
    path: routes.kids,
    component: Kids,
  },
  register: {
    path: routes.register,
    component: Register,
  },
  questions: {
    path: routes.questions,
    component: Questions,
  },
  media: {
    path: routes.media,
    component: Media,
  },
  aboutUs: {
    path: routes.aboutUs,
    component: AboutUs,
  },
  notFound: {
    path: routes.notFound,
    component: NotFound,
  },
};
