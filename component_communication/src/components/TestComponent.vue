<template>
    <div>
        <p style="color:red">子コンポーネントに記載:{{ text }}</p>
    </div>
</template>
  
<script>
    export default {
        props: ['text']
    };
</script>
  