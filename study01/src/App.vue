<template>
  <div id="app">
    <!-- メッセージを表示 -->
    <h1>{{ message }}</h1>
    <!-- TestComponentsコンポーネントを表示 -->
    <TestComponents />
    <!-- isVisibleがtrueなら表示、falseなら非表示 -->
    <!-- v-if: 条件がtrueの場合に要素を表示 -->
    <!-- v-else: 条件がfalseの場合に要素を表示 -->
    <p v-if="isVisible">この要素は表示されています。</p>
    <p v-else>この要素は非表示です。</p>
    <!-- ボタンをクリックすると表示/非表示を切り替える -->
    <button @click="toggleVisibility">表示/非表示を切り替える</button>
    <!-- v-for: 配列items内の要素をループで表示 -->
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <!-- 画像と入力フィールドを表示 -->
    <div>
      <!-- 画像のURLを動的に設定 -->
      <img :src="imageUrl" alt="Image" />
      <!-- 入力フィールドの初期値を動的に設定 -->
      <input :value="inputText" />
    </div>
    <div>
      <!-- v-modelで双方向データバインディング: テキスト入力をリアルタイムで反映 -->
      <input v-model="inputText" placeholder="入力してください" />
      <!-- 入力されたテキストを表示 -->
      <p>入力されたテキスト: {{ inputText }}</p>
    </div>
  </div>
</template>

<script>
// TestComponentsコンポーネントをインポート
import TestComponents from './components/testComponents.vue';

export default {
  // コンポーネントの登録
  components: {
    TestComponents
  },
  // data関数でVueインスタンスの状態を定義
  data() {
    return {
      // 表示するメッセージ
      message: 'こんにちは、Vue 3の世界へようこそ！',
      // 要素の表示/非表示を管理するフラグ
      isVisible: true,
      // リストに表示するアイテム
      items: ['Apple', 'Banana', 'Orange'],
      // 画像のURLを保持
      imageUrl: 'https://via.placeholder.com/150',
      // 入力フィールドの初期テキスト
      inputText: ''
    };
  },
  // メソッドを定義
  methods: {
    // 要素の表示/非表示を切り替えるメソッド
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style>
/* アプリ全体のスタイル */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>