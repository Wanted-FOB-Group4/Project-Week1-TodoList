import MiddleBtn3 from "./MiddleBtn3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './MiddleBtn3.module.scss'

function DateBtn () {
  return (
    <MiddleBtn3 shape='oval'>
      <div className={styles.calendaricon}><FontAwesomeIcon icon={faCalendarCheck} /></div>
    </MiddleBtn3>
  )
}

export default DateBtn