<template>
  <div id="app">
    <router-link to="/">ホーム</router-link> | 
    <router-link to="/about">アバウト</router-link>
    <router-view></router-view>  <!-- ここでルートコンポーネントが表示されます -->
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
