<template>
    <div>
        <!-- 子コンポーネントのテキストを赤色で表示 -->
        <p style="color:red">子コンポーネントに記載:{{ text }}</p>
        <!-- ボタンをクリックして親コンポーネントにデータを送る -->
        <button @click="sendDataToParent">親コンポーネントにデータを送る</button>
    </div>
</template>
  
<script>
    export default {
        // 親コンポーネントから渡されるプロパティ "text" を受け取る
        props: ['text'],
        methods: {
            // 親コンポーネントにデータを送信するメソッド
            sendDataToParent() {
                // $emitを使って親コンポーネントに "sendData" イベントとデータを送信
                this.$emit('sendData', 'こんにちは、親コンポーネント！');
            }
        }
    };
</script>
