const dateformat = {
  filters: {
    formattedDate (value) {
      const { format } = require('date-fns')
      return format(value, 'YYYY/MM/DD')
    }
  }
}
export default {
  dateformat
}
