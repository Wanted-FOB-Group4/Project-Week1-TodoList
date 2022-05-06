import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' 
import styles from './CalendarModal.module.scss'

function CalendarModal(setSelectDate) {
  const [startDate, setStartDate] = useState(new Date())
//   const [selectDate, setSelectDate] = useState(dateFormat(new Date()))

//   const dateFormat = (date) => {
//     let year = date.getFullYear()
//     let month = date.getMonth() + 1
//     let day = date.getDate()
//     let hour = date.getHours()
//     let minute = date.getMinutes()
//     let second = date.getSeconds()

//     year = year.toString().substr(2,4)
//     month = month >= 10 ? month : `0${month}`
//     day = day >= 10 ? day : `0${day}`
//     hour = hour >= 10 ? hour : `0${hour}`
//     minute = minute >= 10 ? minute : `0${minute}`
//     second = second >= 10 ? second : `0${second}`

//     return (year + month + day + hour + minute + second).toString()
// }

   const setSelectDates = (date) => {
    //  setSelectDate(dateFormat(date))
   }

  const handleDateChange = (date) => {
    setStartDate(date)
  }

  return ( 
    <span><DatePicker className={styles.date} dateFormat='yyyy/MM/dd' selected={startDate} onSelect={setSelectDates} onChange={date => handleDateChange(date)} /></span> 
  )
}

export default CalendarModal
