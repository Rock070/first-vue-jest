import { mount } from '@vue/test-utils'
import TodoList from '../src/components/TodoList.vue'

describe('TodoList.vue', () => {
  it('輸入框初始值為空字串', () => {
    const wrapper = mount(TodoList)
    console.log(wrapper.html())
    // expect(wrapper.find('.input').text()).toBe('')
  })
})
