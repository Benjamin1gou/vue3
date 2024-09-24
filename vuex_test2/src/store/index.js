// VuexのcreateStore関数をインポート
import { createStore } from 'vuex';

// Vuexストアを作成
const store = createStore({
  // アプリケーションの状態を定義
  state() {
    return {
      // todosリストの状態
      todos: [
        { id: 1, text: 'Vuexの学習', completed: true },
        { id: 2, text: 'API通信の実装', completed: false },
      ],
      // countの初期値
      count: 0
    };
  },
  // 状態からデータを加工して取得するゲッター
  getters: {
    // 完了したtodoをフィルタリングして返すゲッター
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed);
    }
  },
  // 状態を変更するためのミューテーションを定義
  mutations: {
    // countをインクリメントするミューテーション
    increment(state) {
      state.count++;
    }
  },
  // 非同期処理や複雑なロジックを含むアクションを定義
  actions: {
    // 非同期にカウントをインクリメントするアクション
    incrementAsync({ commit }) {
      setTimeout(() => {
        // 1秒後にincrementミューテーションをコミット
        commit('increment');
      }, 1000);
    }
  }
});

// ストアをエクスポート
export default store;
