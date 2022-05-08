import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' 
import styles from './CalendarModal.module.scss'

function CalendarModal({handleSelectDate}) {
  const [selectDate, setSelectDate] = useState(new Date())

  const handleDateChange = (date) => {
    setSelectDate(date)
  }

  return ( 
    <span><DatePicker className={styles.date} dateFormat='yyyy/MM/dd' selected={selectDate} onSelect={handleSelectDate} onChange={date => handleDateChange(date)} /></span> 
  )
}

export default CalendarModal