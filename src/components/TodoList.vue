<!--  -->
<template>
  <div class="todo-list">
    <ul>
      <li
        v-for="item of titleList"
        @click="changeActive(item.msg)"
        :class="{ active: titleVal === item.msg }"
        :key="item.msg"
      >
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
type msgType = "all" | "done" | "todo";
export interface TitleProps {
  value: string;
  msg: msgType;
}
export default defineComponent({
  setup() {
    const titleList: TitleProps[] = [
      { value: "全部", msg: "all" },
      { value: "已完成", msg: "done" },
      { value: "未完成", msg: "todo" },
    ];
    const titleVal = ref("all");

    const changeActive = (msg: msgType) => {
      titleVal.value = msg;
    }

    return {
      titleVal,
      titleList,
      changeActive
    }
  },
});
</script>
<style lang="less" scoped>
.todo-list {
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  padding: 2vh;
  font-size: 0.3rem;
  width: 70%;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      color: #c0c2ce;
      cursor: pointer;
      transition: 0.2s;
    }
    li.active {
      color: #6b729c;
      transform: scale(1.2);
    }
  }
}
</style>