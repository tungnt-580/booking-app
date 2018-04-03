const availableTime = {
  '030118': [
    { _id: 0, start: 9, end: 10 },
    { _id: 1, start: 10, end: 11 },
    { _id: 2, start: 11, end: 12 }
  ],
  '030218': [
    { _id: 0, start: 8, end: 10 },
    { _id: 1, start: 10, end: 12 },
    { _id: 2, start: 14, end: 16 },
    { _id: 3, start: 16, end: 18 }
  ],
  '030318': [
    { _id: 0, start: 10, end: 11 },
    { _id: 1, start: 14, end: 15 }
  ],
  '030518': [
    { _id: 0, start: 8, end: 12 }
  ]
}

export const availableTimeAPI = {
  getByDate: (day, month, year) => {
    return new Promise((resolve, reject) => {
      resolve(getAvailableTimeFromDate(day, month, year))
    })
  },

  book: (day, month, year, id) => {
    return new Promise((resolve, reject) => {
      const array = getAvailableTimeFromDate(day, month, year)
      array[id].booked = true
      resolve('ok')
    })
  }
}

function getAvailableTimeFromDate(day, month, year) {
  const add0 = (number) => (number < 10 ? '0' : '') + number
  return availableTime[add0(month) + add0(day) + add0(year % 100)] || []
}
