import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderClosed } from '@fortawesome/free-solid-svg-icons'
import styles from './Icons.module.scss'

function FolderIcon () {
  return (
    <div className={styles.icon}>
      <FontAwesomeIcon icon={faFolderClosed} />
    </div>
  )
}

export default FolderIcon