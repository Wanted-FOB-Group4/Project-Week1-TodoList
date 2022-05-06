import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import CalendarModal from "../CalendarModal/CalendarModal"
import styles from './MiddleBtn.module.scss'
import MiddleBtn from "./MiddleBtn"

function DateBtn () {
  return (
    <MiddleBtn shape='oval'>
      <div className={styles.calendaricon}><FontAwesomeIcon icon={faCalendarCheck} /></div>
      <CalendarModal />
    </MiddleBtn>
  )
}

export default DateBtn