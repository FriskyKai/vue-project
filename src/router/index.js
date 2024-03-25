import {createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RegisterView from "@/views/RegisterView.vue";
import UploadView from "@/views/UploadView.vue";
import LoginView from "@/views/LoginView.vue";
import AccessesView from "@/views/AccessesView.vue";
import EditFileView from "@/views/EditFileView.vue";
import EditFileRightsView from "@/views/EditFileRightsView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/accesses',
      name: 'accesses',
      component: AccessesView
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditFileView
    },
    {
      path: '/rights/:id',
      name: 'rights',
      component: EditFileRightsView
    },
  ]
})

export default router
