<template lang='pug'>
.input(
  :class="tw(\
    'w-1/4',\
    'h-6',\
    'px-8',\
    'py-10',\
    'mx-auto',\
    'flex',\
    'justify-center',\
    'items-center',\
    'bg-purple-200',\
    'text-purple-900',\
  )"
)
  div(
    :class="tw(\
      'mr-2',\
    )"
  ) ToDoList
  input(
    @keyup.enter="addTodo"
    :class="tw(\
      'outline-none',\
      'bg-purple-200',\
      'focus:border(b-1 purple-900)',\
    )"

  )
.list(
  v-for="titleItem in titleList"
  :id="titleItem.id"
  :class="tw(\
    'mt-2',\
    'flex',\
    'flex-col',\
    'items-center',\
  )"
)
  .label(
    :class="tw(\
      'bg-yellow-400',\
      'text-left',\
      'w-1/4',\
    )"
  ) {{ titleItem.label }}
  .item__list(
    :class="tw(\
      'w-1/4',\
    )"
  )
    .item(
      v-for="(item, index) in todoList[titleItem.id]"
      :index="index"
      :class="tw(\
        'w-full',\
        'bg-yellow-200',\
        'flex',\
        'justify-between',\
        'items-center',\
      )"
    )
      div(
        :class="tw(\
          'w-8',\
          'h-8',\
          'leading-8',\
          'bg-green-200',\
        )"
      ) {{ index + 1 }}
      div(:class="tw('mr-4')") {{ item.label }}
      .change__status(
        :class="tw('cursor-pointer')"
        @click="changeTodoStatus(item.label)"
      )
        .check(
          v-if="item.status === 2"
        ) ✓
        .remove(
          v-else
        ) ✕
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'TodoList',
  setup () {
    /**
     * @constant {Array} rawTodoList
     * @member {String}
        * 1: 完成
        * 2: 未完成
    */
    const rawTodoList = ref([
      {
        status: 2,
        label: '打電腦'
      },
      {
        status: 1,
        label: '打籃球'
      }
    ])

    const titleList = [
      {
        label: '待完成',
        id: 'unFullFill'
      },
      {
        label: '已完成',
        id: 'fullFill'
      }
    ]

    const todoList = computed(() => ({
      fullFill: rawTodoList.value.filter(item => item.status === 1),
      unFullFill: rawTodoList.value.filter(item => item.status === 2)
    }))

    const addTodo = thing => {
      const value = thing.target.value
      if (!value) return
      const obj = {
        label: value,
        status: 2
      }
      rawTodoList.value.push(obj)
      thing.target.value = ''
    }

    const changeTodoStatus = (label) => {
      const item = rawTodoList.value.find(item => item.label === label)
      item.status = item.status === 1 ? 2 : 1
    }

    return {
      titleList,
      todoList,
      addTodo,
      changeTodoStatus
    }
  }
}
</script>
