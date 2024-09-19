<template>
    <div>
        <!-- textプロパティの内容を表示 -->
        <p>{{ text }}</p>
    </div>
</template>

<script>
    export default {
        // data関数でコンポーネントの状態を定義
        data(){
            return {
                // 表示するテキスト
                text: 'テストコンポーネント'
            };
        }
    };
</script>

<style scoped>
/* pタグのテキストカラーを青に設定 */
p {
  color: blue;
}
</style>
