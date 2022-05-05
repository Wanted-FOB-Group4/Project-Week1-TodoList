import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' 
import styles from './CalendarModal.module.scss'

function CalendarModal({setSelectDate}) {
  const [startDate, setStartDate] = useState(new Date())
  // const [selectDate, setSelectDate] = useState(new Date())

  // const setSelectDate = (day) => {
  //   setSelectDate(day)
  // }

  const handleDateChange = (date) => {
    setStartDate(date)
  }

  return ( 
    <span><DatePicker className={styles.date} dateFormat='yyyy/MM/dd' selected={startDate} onSelect={setSelectDate} onChange={date => handleDateChange(date)} /></span> 
  )
}

CalendarModal.propTypes = {
  setSelectDate: Function
}

export default CalendarModal
