import styles from './MiddleBtn.module.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

MiddleBtn.propTypes = {
  shapes: PropTypes.string.isRequired,
  icon: PropTypes.string
}

function MiddleBtn({ shapes, icon }) {
  return (
    <button className={shapes === 'circle' ? styles.circlebtn : styles.ovalbtn} type='button'>
      {icon ? (
        <div className={icon === 'faX' ? styles.xicon : styles.calendaricon}>
          <FontAwesomeIcon icon={icon === 'faX' ? faX : faCalendarCheck} />
        </div>
      ) : (
        <div className={styles.category} />
      )}
    </button>
  )
}

export default MiddleBtn