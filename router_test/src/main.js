// VueのcreateApp関数をインポート
import { createApp } from 'vue';
// ルートコンポーネントAppをインポート
import App from './App.vue';
// ルーター設定をインポート
import router from './router';

// Vueアプリケーションのインスタンスを作成
createApp(App)
  // ルーターをアプリケーションに登録
  .use(router)
  // アプリケーションをHTMLの #app にマウント
  .mount('#app');
