import { createRouter, createWebHistory } from 'vue-router';
// HomeおよびAboutコンポーネントをインポート
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';

// ルート定義
const routes = [
  // ルートパス '/' に対応するコンポーネントは Home
  { path: '/', component: Home },
  // ルートパス '/about' に対応するコンポーネントは About
  { path: '/about', component: About }
];

// Vue Routerのインスタンスを作成
const router = createRouter({
  // Web履歴モードを使用
  history: createWebHistory(),
  // ルート定義を設定
  routes
});

// ルーターをエクスポート
export default router;
