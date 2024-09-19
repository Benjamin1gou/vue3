<template>
  <div>
    <!-- 親コンポーネントのメッセージを表示 -->
    <h1>親コンポーネントに記載：{{ message }}</h1>
    <!-- 子コンポーネントにメッセージをプロパティとして渡す -->
    <MyComponent :text="message" />
  </div>
</template>

<script>
// 子コンポーネントMyComponentをインポート
import MyComponent from './components/TestComponent.vue';

export default {
  // 子コンポーネントを登録
  components: {
    MyComponent
  },
  // 親コンポーネントのデータを定義
  data() {
    return {
      // 親コンポーネントから渡すメッセージ
      message: '親コンポーネントからのメッセージ'
    };
  }
};
</script>
