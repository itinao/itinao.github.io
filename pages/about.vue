<template>
  <div class="container">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>

    <p>{{ ip }}</p>
    <button @click="getIp">IPアドレス取得</button>

    <input placeholder="hogehoge" @keyup.enter="addTodo" />
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  data: function() {
    return {
      visible: false,
      ip: '0.0.0.0'
    }
  },
  methods: {
    async getIp() {
      this.ip = await this.$axios.$get('http://icanhazip.com/')
    },
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>