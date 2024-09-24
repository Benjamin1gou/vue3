// VuexのcreateStore関数をインポート
import { createStore } from 'vuex';

// Vuexストアを作成
const store = createStore({
  // アプリケーションの状態を定義
  state() {
    return {
      // countの初期値
      count: 0
    };
  },
  // 状態を変更するためのミューテーションを定義
  mutations: {
    // incrementミューテーション: countを1増やす
    increment(state) {
      state.count++;
    }
  },
  // 非同期処理や複雑なロジックを含むアクションを定義
  actions: {
    // incrementアクション: ミューテーションをコミットしてcountを増やす
    increment(context) {
      context.commit('increment');
    }
  }
});

// ストアをエクスポート
export default store;
