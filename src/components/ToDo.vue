<template>
  <div id="todoapp" class="text-center">
    <div class="container">
      <div class="row header">
        <h3 class="h1 col center-align">My To-Dos</h3>
      </div>
      <div class="row">
        <form @submit.prevent="submitTodo" class="col">
          <div class="input-field">
            <b-form-input v-model="newTodo"></b-form-input>
          </div>
          <button class="btn">Add</button>
        </form>
      </div>
      <div class="row">
        <ul class="collection col">
          <li class="collection-item" v-for="todo in todos" :key="todo.id">
            <label>
              <input
                type="checkbox"
                :checked="todo.done"
                @change="todo.done = !todo.done"
              />
              <span class="todo-item">{{ todo.title }}</span>
              <span>
                <a @click.prevent="deleteTodo(todo)">
                  <i class="glyphicon glyphicon-remove"></i>
                </a>
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      todos: [],
      newTodo: ""
    };
  },
  watch: {
    todos: {
      handler() {
        localStorage.todos = JSON.stringify(this.todos);
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos);
    }
  },
  methods: {
    submitTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = "";
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  }
};
</script>

<style scoped>
button {
  background-color: #007bff;
  color: white;
  margin-top: 10px;
  width: 50%;
  font-size: 15px;
}

button:hover {
  color: white;
}

button:visited {
  color: white;
}

ul {
  margin-top: 10px;
  padding: 0px;
}

.glyphicon {
  margin-left: 10px;
}

.todo-item {
  margin-left: 10px;
  font-size: 18px;
}

.input-field {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
