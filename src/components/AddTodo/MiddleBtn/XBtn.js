import MiddleBtn from './MiddleBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import styles from './MiddleBtn.module.scss'

function XBtn({ onClose }) {
  return (
    <MiddleBtn shape='circle' onClose={onClose}>
      <div className={styles.xIcon}>
        <FontAwesomeIcon icon={faX} />
      </div>
    </MiddleBtn>
  )
}

XBtn.propTypes = {
  onClose: Function,
}

export default XBtn
