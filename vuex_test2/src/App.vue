<template>
  <div>
    <!-- 完了済みのTodoリストを表示 -->
    <h1>完了済みのTodo</h1>
    <ul>
      <!-- completedTodosゲッターを使って、完了したTodoをリスト表示 -->
      <li v-for="todo in completedTodos" :key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
  <div>
    <!-- 現在のカウントを表示 -->
    <p>カウント: {{ count }}</p>
    <!-- ボタンをクリックして非同期でカウントをインクリメント -->
    <button @click="incrementAsync">非同期でインクリメント</button>
  </div>
</template>

<script>
// mapGetters, mapState, mapActionsをVuexからインポート
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
  // Vuexのゲッターと状態を算出プロパティとしてマッピング
  computed: {
    // ゲッター completedTodos をマッピングして利用
    ...mapGetters(['completedTodos']),
    // stateのcountをマッピングして利用
    ...mapState(['count'])
  },
  // Vuexのアクションをメソッドとしてマッピング
  methods: {
    // アクション incrementAsync をマッピングして利用
    ...mapActions(['incrementAsync'])
  }
};
</script>
