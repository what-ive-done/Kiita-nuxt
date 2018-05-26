import Mixins from './index'
import { format, subDays } from 'date-fns'

describe('[Mixin : filter] daysAgo', () => {
  const daysAgo = Mixins.listItem.filters.daysAgo
  const NOW = new Date()
  const TWO_DAYS_BEFORE = subDays(NOW, 2)
  const NINE_TEEN_DAYS_BEFORE = subDays(NOW, 19)
  const TWENTY_DAYS_BEFORE = subDays(NOW, 20)
  const THIRTY_DAYS_BEFORE = subDays(NOW, 30)
  const HUNDRED_DAYS_BEFORE = subDays(NOW, 100)
  const DATE_FORMAT = 'YYYY.MM.DD'

  test('현재로부터 20일 전이면 YYYY.MM.DD 포맷으로 출력한다.', () => {
    expect(daysAgo(THIRTY_DAYS_BEFORE)).toBe(format(THIRTY_DAYS_BEFORE, DATE_FORMAT))
    expect(daysAgo(HUNDRED_DAYS_BEFORE)).toBe(format(HUNDRED_DAYS_BEFORE, DATE_FORMAT))
  })

  test('현재로부터 20일 이내면 XX일 전 포맷으로 출력한다.', () => {
    expect(daysAgo(TWO_DAYS_BEFORE)).toBe('2일 전')
    expect(daysAgo(NINE_TEEN_DAYS_BEFORE)).toBe('19일 전')
    expect(daysAgo(TWENTY_DAYS_BEFORE)).toBe('20일 전')
  })

  test('같은 날짜면 오늘로 출력한다.', () => {
    expect(daysAgo(new Date())).toBe('오늘')
  })
})
