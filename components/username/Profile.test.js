import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Profile from './Profile.vue'

describe('프로필 컴포넌트', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Profile, {
      stubs: ['router-link', 'nuxt-link'],
      propsData: {
        user: {
          username: 'changjoo-park',
          email: 'pcjpcj2@gmail.com'
        },
        isEditable: true
      }
    })
  })

  test('Vue 인스턴스이다.', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('User props가 없으면 에러', () => {
    let spy = spyOn(console, 'error')
    const wrapper = shallowMount(Profile, {
      stubs: ['router-link', 'nuxt-link']
    })
    expect(spy).toBeCalledWith(expect.stringContaining('[Vue warn]: Missing required prop: \"user\"'))
  })

  test('Gravatar 컴포넌트를 갖는다.', () => {
    expect(wrapper.find('img')).toBeTruthy()
    expect(wrapper.find('.user-avatar')).toBeTruthy()
  })

  test('사용자 이름을 보여준다.', () => {
    expect(wrapper.find('.profile-username').text()).toBe(wrapper.vm.user.username)
  })

  test('사용자 이메일을 보여준다.', () => {
    expect(wrapper.find('.profile-email').text()).toBe(wrapper.vm.user.email)
  })

  test('다른 사용자인 경우 프로필 수정을 노출하지 않음', () => {
    const NOT_EDITABLE = false
    wrapper = shallowMount(Profile, {
      stubs: ['router-link', 'nuxt-link'],
      propsData: {
        user: {
          username: 'changjoo-park',
          email: 'pcjpcj2@gmail.com'
        },
        isEditable: NOT_EDITABLE
      }
    })
    expect(wrapper.is('.profile-edit')).toBe(NOT_EDITABLE)
  })
})
