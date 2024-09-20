<template>
  <div>
    <!-- 親コンポーネントのメッセージを表示 -->
    <h1>親コンポーネントに記載：{{ message }}</h1>
    <!-- 子コンポーネントにメッセージをプロパティとして渡す -->
    <MyComponent :text="message" />
  </div>

  <div>
    <!-- 子コンポーネントからイベント "sendData" を受け取り、親コンポーネントのメソッド receiveData を呼び出す -->
    <MyComponent @sendData="receiveData" />
    <!-- 子コンポーネントから受け取ったデータを表示 -->
    <p>子コンポーネントから受け取ったデータ: {{ receivedData }}</p>
  </div>
</template>

<script>
// 子コンポーネントMyComponentをインポーネント
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
      message: '親コンポーネントからのメッセージ',
      // 子コンポーネントから受け取るデータ
      receivedData: ''
    };
  },
  // メソッドを定義
  methods: {
    // 子コンポーネントからのデータを受け取るメソッド
    receiveData(data) {
      this.receivedData = data;
    }
  }
};
</script>
