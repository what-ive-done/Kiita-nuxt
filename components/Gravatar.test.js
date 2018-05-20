import { mount } from '@vue/test-utils'
import Gravatar from './Gravatar.vue'

describe('Gravatar 컴포넌트', () => {
  test('컴포넌트 이름은 gravatar이다.', () => {
    const wrapper = mount(Gravatar, {
      propsData: {
        email: 'pcjpcj2@gmail.com'
      }
    })
    expect(wrapper.name()).toBe('gravatar')
  })

  test('Gravatar 컴포넌트는 email을 갖는다.', () => {
    const wrapper = mount(Gravatar, {
      propsData: {
        email: 'pcjpcj2@gmail.com'
      }
    })
    expect(wrapper.props().email).toBe('pcjpcj2@gmail.com')
  })

  test('email이 필수이다.', () => {
    let spy = spyOn(console, 'error')
    const wrapper = mount(Gravatar)
    expect(spy).toBeCalledWith(expect.stringContaining('[Vue warn]: Missing required prop: \"email\"'))
  })

  test('email 기반으로 gravatar URL을 만든다.', () => {
    let spy = spyOn(console, 'error')
    const wrapper = mount(Gravatar, {
      propsData: {
        email: 'pcjpcj2@gmail.com'
      }
    })
    expect(wrapper.vm.gravatar).toBeTruthy()
    expect(wrapper.vm.gravatar).toContain('gravatar.com')
  })
})
