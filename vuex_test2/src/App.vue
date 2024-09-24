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
  <div>
    <!-- 固定メッセージを表示 -->
    <p>{{ message }}</p>
  </div>
  <div>
    <form @submit.prevent="submitForm">
      <input v-model="name" placeholder="名前を入力してください" />
      <button type="submit">送信</button>
    </form>
    <p>入力された名前: {{ name }}</p>
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
    ...mapActions(['incrementAsync']),
    submitForm() {
      console.log('フォームが送信されました: ', this.name);
    }
  },
  // ローカルデータとしてメッセージを定義
  data() {
    return {
      message: 'こんにちは！', // 固定メッセージ
      name: ''
    };
  },
  // コンポーネントが作成されたときに実行されるライフサイクルフック
  created() {
    console.log('コンポーネントが作成されました');
  },
  // コンポーネントがマウントされたときに実行されるライフサイクルフック
  mounted() {
    console.log('コンポーネントがマウントされました');
  },
  // データが更新されたときに実行されるライフサイクルフック
  updated() {
    console.log('データが更新されました');
  },
  // コンポーネントが破棄される前に実行されるライフサイクルフック
  beforeUnmount() {
    console.log('コンポーネントが破棄されます');
  }
};
</script>
