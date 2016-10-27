
const WEEKDAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

const WEEKDAYS_SHORT = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
]

export function weekday(number, short = false) {
    if(short) {
      return WEEKDAYS_SHORT[number]
    }
    
    return WEEKDAYS[number]
}
