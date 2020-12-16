<template>
  <main>
    <div class="container">
      <h1>欢迎使用Tcgogo代办事项</h1>
      <todo-add @appendTodo="appendTodo" :tid="tid"></todo-add>
      <!-- <todo-list></todo-list>
      <todo-content></todo-content> -->
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import TodoAdd from "./components/TodoAdd.vue";
// import TodoList from "./components/TodoList.vue";
// import TodoContent from "./components/TodoContent.vue";

export interface TodosProps {
  id: number;
  complate: boolean;
  value: string;
}

export default defineComponent({
  name: "App",
  components: {
    TodoAdd,
    // TodoList,
    // TodoContent,
  },
  setup() {
    const todos = ref([{ id: 1, complate: true, value: "sad" }]);

    const appendTodo = (todo: TodosProps) => {
      todos.value.push(todo);
    };

    const tid = computed(() => {
      if (todos.value[todos.value.length - 1]) {
        return todos.value[todos.value.length - 1].id + 1;
      } else {
        return 1;
      }
    });

    return {
      todos,
      tid,
      appendTodo,
    };
  },
});
</script>

<style lang="less">
:root {
  font-size: 50px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
  list-style: none;
}

main {
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgb(203, 210, 240);
  .container {
    width: 60%;
    max-width: 400px;
    min-width: 300px;
    padding: 5vh 0;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    background-color: rgb(245, 246, 252);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 0.5rem;
  color: #414873;
}

@media screen and (max-width: 500px) {
  :root {
    font-size: 30px;
  }
}
</style>
