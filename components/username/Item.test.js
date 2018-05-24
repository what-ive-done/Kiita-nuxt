import { mount, RouterLinkStub } from '@vue/test-utils'
import Item from './Item.vue'
import NuxtLink from '../../.nuxt/components/nuxt-link'

describe('사용자 프로필의 Item 컴포넌트', () => {
  let wrapper
  const itemPropsData = {
    id: 2008,
    title: 'Neque cum sequi enim vel consequatur alias voluptates in consectetur.',
    body: 'In odio temporibus et aut qui tenetur ut repellendus. Voluptatem eos placeat dicta sapiente consequatur facere inventore. Ut dignissimos dolorem voluptatem.\n \rEaque autem enim ad natus id unde porro aut. Voluptatem animi aut et eaque quis. Delectus atque veniam sed debitis dolores voluptas et. Officiis et ut odit at cupiditate culpa rem rerum. Recusandae reprehenderit ut eaque ipsam sequi fugit.\n \rTenetur quidem laboriosam aut tempore quo. Recusandae quisquam nihil sed ut consequatur ullam asperiores. Nobis eligendi mollitia. Facere est neque. Est sequi autem facilis.',
    published: true,
    createdAt: '2018-05-20T13:51:13.292Z',
    updatedAt: '2018-05-20T13:51:13.292Z',
    User: {
      id: 91,
      email: 'Jaylen2@yahoo.com',
      username: 'Zora_Wiegand'
    }
  }

  beforeEach(() => {
    wrapper = mount(Item, {
      propsData: {
        item: itemPropsData
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      }
    })
  })
  test('item props가 존재한다.', () => {
    let spy = spyOn(console, 'error')
    const wrapper = mount(Item)
    expect(spy)
      .toBeCalledWith(
        expect
          .stringContaining('[Vue warn]: Missing required prop: \"item\"')
      )
  })

  test('작성일을 Humanize한다.', () => {
    expect(wrapper.vm.daysAgo.includes('전')).toBe(true)
  })

  test('타이틀을 최대 20 글자까지 출력한다.', () => {
    expect(wrapper.vm.stripedTitle.length <= 20).toBe(true)
  })

  test('작성자를 출력한다.', () => {
    const title = 'Neque cum sequi enim vel consequatur alias voluptates in consectetur.'.slice(0, 20)
    expect(wrapper.vm.item.User.username).toBe('Zora_Wiegand')
  })

  test('아이템의 태그를 출력한다.', () => {

  })
})
