import { mount, RouterLinkStub } from '@vue/test-utils'
import Item from '../Item.vue'
import NuxtLink from '../../.nuxt/components/nuxt-link'

describe('Item 컴포넌트(리스트용)', () =>{
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

  test('item props를 가진다', () => {
    let spy = spyOn(console, 'error')
    const wrapper = mount(Item)
    expect(spy)
      .toBeCalledWith(
        expect
          .stringContaining('[Vue warn]: Missing required prop: \"item\"')
      )
  })

  test('작성자 Gravatar 아이콘을 표시한다', () => {
    const gravatar = wrapper.find('.user-avartar')
    expect(gravatar).toBeTruthy()
  })

  test('작성일을 표시한다. 한달 이내의 작성일은 ~일 전 으로 표시한다.', () => {
    const now = new Date()
    const threeDaysAgo = now.setDate(now.getDate() - 3)

    const itemPropsData = {
      id: 2008,
      title: 'Neque cum sequi enim vel consequatur alias voluptates in consectetur.',
      body: 'In odio temporibus et aut qui tenetur ut repellendus. Voluptatem eos placeat dicta sapiente consequatur facere inventore. Ut dignissimos dolorem voluptatem.\n \rEaque autem enim ad natus id unde porro aut. Voluptatem animi aut et eaque quis. Delectus atque veniam sed debitis dolores voluptas et. Officiis et ut odit at cupiditate culpa rem rerum. Recusandae reprehenderit ut eaque ipsam sequi fugit.\n \rTenetur quidem laboriosam aut tempore quo. Recusandae quisquam nihil sed ut consequatur ullam asperiores. Nobis eligendi mollitia. Facere est neque. Est sequi autem facilis.',
      published: true,
      createdAt: (new Date(threeDaysAgo).toISOString()),
      updatedAt: (new Date(threeDaysAgo).toISOString()),
      User: {
        id: 91,
        email: 'Jaylen2@yahoo.com',
        username: 'Zora_Wiegand'
      }
    }

    const wrapper = mount(Item, {
      propsData: { item: itemPropsData },
      stubs: { NuxtLink: RouterLinkStub }
    })

    const daysAgo = wrapper.find('.item-created')
    expect(daysAgo.text()).toBe('3일 전')
  })

  test('작성일을 표시한다. 한달 이후의 작성일은 YYYY.MM.DD로 표시한다.', () => {
    const dateFns = require('date-fns')
    const now = new Date()
    const thirtyDaysAgo = dateFns.subDays(now, 30)
    const itemPropsData = {
      id: 2008,
      title: 'Neque cum sequi enim vel consequatur alias voluptates in consectetur.',
      body: 'In odio temporibus et aut qui tenetur ut repellendus. Voluptatem eos placeat dicta sapiente consequatur facere inventore. Ut dignissimos dolorem voluptatem.\n \rEaque autem enim ad natus id unde porro aut. Voluptatem animi aut et eaque quis. Delectus atque veniam sed debitis dolores voluptas et. Officiis et ut odit at cupiditate culpa rem rerum. Recusandae reprehenderit ut eaque ipsam sequi fugit.\n \rTenetur quidem laboriosam aut tempore quo. Recusandae quisquam nihil sed ut consequatur ullam asperiores. Nobis eligendi mollitia. Facere est neque. Est sequi autem facilis.',
      published: true,
      createdAt: thirtyDaysAgo,
      updatedAt: thirtyDaysAgo,
      User: {
        id: 91,
        email: 'Jaylen2@yahoo.com',
        username: 'Zora_Wiegand'
      }
    }

    const wrapper = mount(Item, {
      propsData: { item: itemPropsData },
      stubs: { NuxtLink: RouterLinkStub }
    })

    const daysAgo = wrapper.find('.item-created')
    expect(daysAgo.text()).toBe(dateFns.format(thirtyDaysAgo, 'YYYY.MM.DD'))
  })

  test('아이템의 제목을 표시한다. 최대길이는 20자리이다.', () => {
    const title = wrapper.find('.item-title')
    expect(title.text().length <= 20).toBe(true)
  })

  test('아이템의 작성자 이름을 출력한다.', () => {
    const username = wrapper.find('.item-username')
    expect(username.text()).toBe('Zora_Wiegand')
  })
})
