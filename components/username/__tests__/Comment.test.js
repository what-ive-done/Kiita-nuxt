import {
  mount,
  RouterLinkStub
} from '@vue/test-utils'
import Comment from '../Comment.vue'
import NuxtLink from '../../../.nuxt/components/nuxt-link'


describe('사용자 프로필의 Comment 컴포넌트', () => {
  let wrapper
  const commentPropsData = {
    id: 156,
    body: 'Nostrum architecto neque libero molestias voluptatem quaerat.',
    createdAt: '2018-05-20T13:51:13.693Z',
    updatedAt: '2018-05-20T13:51:13.693Z',
    UserId: 2,
    ItemId: 2008
  }
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
    wrapper = mount(Comment, {
      propsData: {
        comment: commentPropsData,
        item: itemPropsData
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      }
    })
  })

  test('댓글 props가 필수이다.', () => {
    let spy = spyOn(console, 'error')
    const wrapper = mount(Comment)
    expect(spy)
      .toBeCalledWith(
        expect
        .stringContaining('[Vue warn]: Missing required prop: \"comment\"')
      )
  })

  test('아이템 props가 필수이다.', () => {
    let spy = spyOn(console, 'error')
    const wrapper = mount(Comment)
    expect(spy)
      .toBeCalledWith(
        expect
        .stringContaining('[Vue warn]: Missing required prop: \"item\"')
      )
  })

  test('어떤 글에 달린 댓글인지 표시한다.', () => {
    expect(wrapper.find('.comment-item-title')).toBeTruthy()
    expect(wrapper.find('.comment-item-title').text()).toBe(wrapper.vm.item.title)
  })

  test('언제 작성한 댓글인지 표시한다.', () => {
    expect(wrapper.find('.comment-created-at')).toBeTruthy()
    expect(wrapper.find('.comment-created-at').text()).toBe('2018/05/20')
  })

  test('댓글의 일부 내용을 표시한다.', () => {
    expect(wrapper.find('.comment-body')).toBeTruthy()
    expect(wrapper.find('.comment-body').text()).toBe(wrapper.vm.comment.body)
  })

  test('댓글의 원본 글은 해당 글의 링크이다.', () => {
    const link = wrapper.find(RouterLinkStub)
    const nuxtLinkProps = {
      to: {
        name: 'username-items-id',
        params: {
          username: 'Zora_Wiegand',
          id: 2008
        }
      }
    }
    expect(link.props()).toEqual(nuxtLinkProps)
  })
})
