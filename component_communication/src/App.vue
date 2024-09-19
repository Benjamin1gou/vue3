<template>
  <div>
    <h1>親コンポーネントに記載：{{ message }}</h1>
    <MyComponent :text="message" />
  </div>
</template>

<script>
import MyComponent from './components/TestComponent.vue';

export default {
  components: {
    MyComponent
  },
  data() {
    return {
      message: '親コンポーネントからのメッセージ'
    };
  }
};
</script>
