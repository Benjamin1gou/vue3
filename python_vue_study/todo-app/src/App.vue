<template>
  <div id="app">
    <h1>Todoアプリ</h1>
    <input v-model="newTodo" placeholder="新しいTodoを追加" @keyup.enter="addTodo" />
    <ul>
      <!-- TODOリストを表示 -->
      <li v-for="todo in todos" :key="todo.id">
        <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
        <button @click="toggleComplete(todo)">完了/未完了</button>
        <button @click="deleteTodo(todo.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'  // Axiosを使用してバックエンドと通信

export default {
  data() {
    return {
      todos: [],  // TODOリストを格納する配列
      newTodo: '' // 新しいTODOのタイトルを格納する変数
    }
  },
  created() {
    this.fetchTodos()  // コンポーネントが作成されたときにTODOリストを取得
  },
  methods: {
    // TODOリストをバックエンドから取得
    async fetchTodos() {
      const response = await axios.get('http://127.0.0.1:5000/todos')
      this.todos = response.data  // 取得したデータをtodosにセット
    },
    // 新しいTODOを追加
    async addTodo() {
      if (this.newTodo.trim() === '') return  // 空のTODOは追加しない
      await axios.post('http://127.0.0.1:5000/todos', { title: this.newTodo })
      this.newTodo = ''  // 入力欄をクリア
      this.fetchTodos()  // リストを再取得して表示を更新
    },
    // TODOの完了/未完了状態を切り替える
    async toggleComplete(todo) {
      await axios.put(`http://127.0.0.1:5000/todos/${todo.id}`, { completed: !todo.completed })
      this.fetchTodos()  // リストを再取得して表示を更新
    },
    // TODOを削除
    async deleteTodo(id) {
      await axios.delete(`http://127.0.0.1:5000/todos/${id}`)
      this.fetchTodos()  // リストを再取得して表示を更新
    }
  }
}
</script>

<style>
/* 完了済みのTODOは取り消し線を引く */
.completed {
  text-decoration: line-through;
}
</style>
