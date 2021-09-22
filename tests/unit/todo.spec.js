import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList.vue', () => {
  it('輸入框初始值為空字串', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.find('.input').text()).toBe('')
  })
})
