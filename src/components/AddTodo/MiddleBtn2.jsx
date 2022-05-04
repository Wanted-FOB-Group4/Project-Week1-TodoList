import styles from './MiddleBtn2.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faCalendarCheck } from "@fortawesome/free-solid-svg-icons"

function MiddleBtn2 () {

  return (
    <>
      <button className={styles.categorybtn} type='button'>
        <div className={styles.category} />
      </button>
      <button className={styles.xbtn} type='button'>
        <div className={styles.xicon}><FontAwesomeIcon icon={faX} className="xicon" /></div>
      </button>
      <button className={styles.todaybtn} type='button'>
        <div className={styles.calendaricon}><FontAwesomeIcon icon={faCalendarCheck} className="calendaricon" /></div>
      </button>
    </>
  )
}

export default MiddleBtn2