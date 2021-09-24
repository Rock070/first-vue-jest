import { mount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList.vue', () => {
  it('輸入框初始值為空字串', () => {
    const wrapper = mount(TodoList)
    expect(wrapper.find('input').text()).toBe('')
  })
  it('未完成清單初始值應為零個項目', () => {
    const wrapper = mount(TodoList)
    expect(wrapper.vm.todoList.fullFill.length).toBe(0)
  })
  it('已完成清單初始值應為兩個項目', () => {
    const wrapper = mount(TodoList)
    expect(wrapper.vm.todoList.unFullFill.length).toBe(2)
  })
  it('當輸入框有值，按下 Enter，未完成項目會多一個項目，且輸入框會清空', () => {
    const wrapper = mount(TodoList)
    const input = wrapper.find('input')
    const lengthBefore = wrapper.vm.todoList.unFullFill.length

    input.setValue('123')
    input.trigger('keyup.enter')

    const lengthAfter = wrapper.vm.todoList.unFullFill.length
    expect(lengthAfter).toBe(lengthBefore + 1)
    expect(input.element.value).toBe('')
  })
  it('當輸入框無值，按下 Enter，未完成項目不會變更', () => {
    const wrapper = mount(TodoList)
    const input = wrapper.find('input')
    const lengthBefore = wrapper.vm.todoList.unFullFill.length

    input.setValue('')
    input.trigger('keyup.enter')

    const lengthAfter = wrapper.vm.todoList.unFullFill.length
    expect(lengthAfter).toBe(lengthBefore)
  })
  it('未完成清單中項目點選勾勾 icon 後，已完成清單會多一項目', () => {
    const wrapper = mount(TodoList)
    const unFullFillItem = wrapper.find('[id="unFullFill"]')
    const lengthBefore = wrapper.vm.todoList.fullFill.length

    unFullFillItem.find('.change__status').trigger('click')
    const lengthAfter = wrapper.vm.todoList.fullFill.length
    expect(lengthAfter).toBe(lengthBefore + 1)
  })
  it('已完成清單中項目點選叉叉 icon 後，未完成清單會多一項目', async () => {
    const wrapper = mount(TodoList)
    const unFullFillItem = wrapper.find('[id="unFullFill"]')
    unFullFillItem.find('.change__status').trigger('click')

    const fullFillItem = wrapper.find('[id="fullFill"]')
    const lengthBefore = wrapper.vm.todoList.unFullFill.length
    await wrapper.vm.$nextTick()
    fullFillItem.find('.change__status').trigger('click')
    const lengthAfter = wrapper.vm.todoList.unFullFill.length
    expect(lengthAfter).toBe(lengthBefore + 1)
  })
})
