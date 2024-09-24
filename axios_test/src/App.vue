<template>
  <div>
    <h1>APIからのデータ</h1>
    <!-- エラーメッセージがある場合は表示 -->
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <!-- エラーメッセージがない場合は取得したデータをリスト表示 -->
    <ul v-else>
      <li v-for="item in data" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
// axiosライブラリをインポート
import axios from 'axios';

export default {
  // コンポーネントのデータを定義
  data() {
    return {
      // APIから取得したデータを格納する配列
      data: [],
      // エラーメッセージを格納するプロパティ
      errorMessage: null
    };
  },
  // コンポーネントがマウントされた時に実行される処理
  mounted() {
    // axiosを使ってAPIからデータを取得
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // 取得したデータをdataプロパティにセット
        this.data = response.data;
      })
      .catch(err => {
        // エラーが発生した場合の処理
        console.error(err);  // ここでエラー内容をログに出力
        this.errorMessage = 'データの取得に失敗しました'; // エラーメッセージを設定
      });
  }
};
</script>
