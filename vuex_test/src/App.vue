<template>
  <div>
    <!-- Vuexの状態から取得したカウントを表示 -->
    <p>カウント: {{ count }}</p>
    <!-- ボタンをクリックするとincrementアクションを呼び出してカウントを増やす -->
    <button @click="increment">インクリメント</button>
  </div>
</template>

<script>
// VuexのmapStateとmapActionsをインポート
import { mapState, mapActions } from 'vuex';

export default {
  // Vuexの状態を算出プロパティとして利用
  computed: {
    ...mapState(['count']) // Vuexのstateからcountを取得
  },
  // Vuexのアクションをメソッドとして利用
  methods: {
    ...mapActions(['increment']) // Vuexのincrementアクションを呼び出す
  }
};
</script>
