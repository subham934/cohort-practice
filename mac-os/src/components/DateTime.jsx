import React, { useEffect, useState } from 'react'

const formatDateTime = (date) => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

  const dayName = days[date.getDay()]
  const monthName = months[date.getMonth()]
  const day = date.getDate()
  const hours24 = date.getHours()
  const hours12 = hours24 % 12 || 12
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const period = hours24 >= 12 ? 'pm' : 'am'

  return `${dayName} ${monthName} ${day} ${hours12}:${minutes}${period}`
}

const DateTime = () => {
  const [dateTime, setDateTime] = useState(formatDateTime(new Date()))

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(formatDateTime(new Date()))
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return <div>{dateTime}</div>
}

export default DateTime;

