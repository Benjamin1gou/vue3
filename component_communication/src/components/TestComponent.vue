<template>
    <div>
        <!-- 子コンポーネントのテキストを赤色で表示 -->
        <p style="color:red">子コンポーネントに記載:{{ text }}</p>
    </div>
</template>
  
<script>
    export default {
        // 親コンポーネントから渡されるプロパティ "text" を受け取る
        props: ['text']
    };
</script>
