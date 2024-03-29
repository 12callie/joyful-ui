import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Layout from './views/Layout.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import Usage from './views/Usage.vue'
import ButtonDemo from './views/ButtonDemo.vue'
import SwitchDemo from './views/SwitchDemo.vue'
import MessageDemo from './views/MessageDemo.vue'
import TabsDemo from './views/TabsDemo.vue'
import NavBarDemo from './views/NavBarDemo.vue'
import DialogDemo from './views/DialogDemo.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/home', redirect: '/' },
    {
      path: '/joyful',
      component: Layout,
      children: [
        {
          path: 'doc',
          children: [
            { path: '', redirect: '/joyful/doc/intro' },
            { path: 'intro', component: Intro },
            { path: 'install', component: Install },
            { path: 'usage', component: Usage },
          ],
        },
        {
          path: 'components',
          children: [
            { path: '', redirect: '/joyful/components/button' },
            { path: 'button', component: ButtonDemo },
            { path: 'switch', component: SwitchDemo },
            { path: 'message', component: MessageDemo },
            { path: 'tabs', component: TabsDemo },
            { path: 'navbar', component: NavBarDemo },
            { path: 'dialog', component: DialogDemo },
          ],
        },
      ],
    },
  ],
})
