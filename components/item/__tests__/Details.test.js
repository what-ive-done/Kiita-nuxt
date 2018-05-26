import { mount } from '@vue/test-utils'
import ItemDetail from '../Details.vue'
import { subDays } from 'date-fns'

describe('ItemDetail', () => {
  let wrapper
  const now = new Date()
  const thirtyDaysAgo = subDays(now, 30)
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

  beforeEach(() => {
    wrapper = mount(ItemDetail, {
      propsData: {
        item: itemPropsData
      }
    })
  })

  test('타이틀을 출력한다.', () => {
    const titleElement = wrapper.find('.item-title')
    expect(titleElement.text()).toBe(itemPropsData.title)
  })

  test('상세 내역을 출력한다..', () => {
    const descriptionElement = wrapper.find('.item-details')
    expect(descriptionElement.text()).toBe(itemPropsData.body)
  })
})
