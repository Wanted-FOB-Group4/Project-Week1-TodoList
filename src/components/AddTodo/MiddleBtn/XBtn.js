import MiddleBtn from './MiddleBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import styles from './MiddleBtn.module.scss'

function XBtn({ onClose }) {
  return (
    <MiddleBtn shape='circle' onClose={onClose}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className={styles.xicon}>
        <FontAwesomeIcon icon={faX} />
      </div>
    </MiddleBtn>
  )
}

XBtn.propTypes = {
  onClose: Function,
}

export default XBtn
