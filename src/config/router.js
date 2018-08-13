import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/page/LoginView';
import MainView from '@/page/MainView';
import Dashboard from '@/page/dashboard/Dashboard';
import Product from '@/page/product/Product';
import Noti from '@/page/noti/Noti';
import Account from '@/page/dashboard/account/Account';
import ProductDetail from '@/page/product/product-detail/ProductDetail';
import ClassList from '@/page/product/class/ClassList';
import ClassDetail from '@/page/product/class/components/ClassDetail';
import NoticePage from '@/page/noti/notice/NoticePage';
import NotificationPage from '@/page/noti/notification/NotificationPage';
import NoticeDetail from '@/page/noti/notice/components/NoticeDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/hostcenter',
      name: 'hostcenter',
      redirect: '/hostcenter/account',
      component: MainView,
      children: [
        {
          path: '/hostcenter/:hostname/dashboard',
          name: 'dashboard',
          component: Dashboard,
          props: true,
          children: [
            {
              path: '/hostcenter/account',
              name: 'account',
              component: Account,
            },
          ],
        },
        {
          path: '/hostcenter/:hostname/product',
          name: 'product',
          component: Product,
          props: true,
          children: [
            {
              path: '/hostcenter/:hostname/product/:id',
              name: 'productDetail',
              props: true,
              component: ProductDetail,
            },
            {
              path: '/hostcenter/:hostname/classList/:id',
              name: 'classList',
              props: true,
              component: ClassList,
              children: [
                {
                  path: '/hostcenter/:hostname/classList/:id/:classid',
                  name: 'classDetail',
                  props: true,
                  component: ClassDetail,
                },
              ],
            },
          ],
        },
        {
          path: '/hostcenter/:hostname/noti',
          name: 'noti',
          props: true,
          component: Noti,
          redirect: '/hostcenter/:hostname/noti/notification',
          children: [
            {
              path: '/hostcenter/:hostname/noti/notification',
              name: 'notification',
              component: NotificationPage,
            },
            {
              path: '/hostcenter/:hostname/noti/notice',
              name: 'notice',
              component: NoticePage,
              children: [
                {
                  path: '/hostcenter/:hostname/noti/notice/:noticeId',
                  name: 'noticeDetail',
                  component: NoticeDetail,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
