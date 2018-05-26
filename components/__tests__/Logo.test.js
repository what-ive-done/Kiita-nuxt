import { mount } from '@vue/test-utils'
import Logo from '../Logo.vue'

describe('로고 컴포넌트', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Logo)
  })
  test('로고 컴포넌트는 Vue 인스턴스이다.', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
