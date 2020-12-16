<!--  -->
<template>
  <div class="todo-content">
    <todo-content-item
      v-for="item of newTodo"
      :key="item.id"
      :todo="item"
    ></todo-content-item>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
import mitt from 'mitt';
import TodoContentItem from "./TodoContentItem.vue";
import {TodosProps} from "../App.vue";
import { msgType } from "./TodoList.vue"
export default defineComponent({
  props: {
    todos: {
      type: Array as PropType<TodosProps[]>
    },
  },
  components: {
    TodoContentItem
  },
  setup(props) {
    const emitter = mitt();
    const isCheck = ref(false);
    const msg: msgType = ref("all");

    const newTodo = computed(() => {
      switch (msg.value) {
        case "all":
          return props.todos;
        case "done":
          return props.todos.filter((item) => item.complete);
        case "todo":
          return props.todos.filter((item) => !item.complete);
      }
    })

    onMounted(() => {
      emitter.on("changeList", (msg) => {
        console.log(msg);
      });
      
    })

    return {
      newTodo,
      isCheck,
      msg
    }
  }

});
</script>
<style lang="less" scoped>
.todo-content {
  font-size: 0.4rem;
  width: 80%;
  display: flex;
  flex-direction: column;
}
</style>