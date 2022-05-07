import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderClosed, faFlag, faMoon } from '@fortawesome/free-regular-svg-icons'
import styles from './Icons.module.scss'

function Icons () {
  return (
    <div className={styles.box}>
      <FontAwesomeIcon className={styles.icon} icon={faFolderClosed} />
      <FontAwesomeIcon className={styles.icon} icon={faFlag} />
      <FontAwesomeIcon className={styles.icon} icon={faMoon} />
    </div>
  )
}

export default Icons