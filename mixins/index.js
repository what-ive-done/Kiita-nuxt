import { distanceInWords, differenceInCalendarDays, format, isToday } from 'date-fns'
import koLocale from 'date-fns/locale/ko'

const dateformat = {
  filters: {
    formattedDate (value) {
      const { format } = require('date-fns')
      return format(value, 'YYYY/MM/DD')
    }
  }
}

const listItem = {
  filters: {
    daysAgo (value) {
      const now = new Date()
      const dayDiff = differenceInCalendarDays(now, value)

      if (dayDiff > 20) return format(value, 'YYYY.MM.DD')

      if (isToday(value)) return '오늘'

      const locale = { locale: koLocale }
      const days = distanceInWords(value, now, locale)
      return `${days} 전`
    },

    stripedTitle (value) {
      return value.slice(0, 20) || ''
    }
  }
}

export default {
  dateformat,
  listItem
}
