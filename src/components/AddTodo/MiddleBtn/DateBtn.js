import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import CalendarModal from "../CalendarModal/CalendarModal"
import styles from './MiddleBtn.module.scss'
import MiddleBtn from "./MiddleBtn"

function DateBtn ({handleSelectDate}) {
  return (
    <MiddleBtn shape='oval'>
      <div className={styles.calendarIcon}><FontAwesomeIcon icon={faCalendarCheck} /></div>
      <CalendarModal handleSelectDate={handleSelectDate}/>
    </MiddleBtn>
  )
}

export default DateBtn