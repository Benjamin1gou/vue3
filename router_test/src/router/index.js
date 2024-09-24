import { createRouter, createWebHistory } from 'vue-router';
// HomePageとAboutPageコンポーネントをインポート
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';

// ルート定義
const routes = [
  // ホームページのルート設定
  { path: '/', name: 'Home', component: Home },
  // Aboutページのルート設定。requiresAuthメタフィールドを追加して認証が必要であることを示す
  { path: '/about', name: 'About', component: About, meta: { requiresAuth: true } }
];

// Vue Routerのインスタンスを作成
const router = createRouter({
  // Web履歴モードを使用
  history: createWebHistory(),
  // ルート定義を設定
  routes
});

// グローバルナビゲーションガード
router.beforeEach((to, from, next) => {
  // requiresAuthが設定されているルートの場合に認証チェックを行う
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = false;  // ここに認証のロジックを追加
    if (!isAuthenticated) {
      // 認証されていない場合はホームページにリダイレクト
      next('/');
    } else {
      // 認証されている場合はそのまま進む
      next();
    }
  } else {
    // 認証が不要なページへはそのまま進む
    next();
  }
});

export default router;
