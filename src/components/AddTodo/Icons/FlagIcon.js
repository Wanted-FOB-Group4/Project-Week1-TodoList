import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag} from '@fortawesome/free-solid-svg-icons'
import styles from './Icons.module.scss'

function FlagIcon () {
  return (
    <div className={styles.icon}>
      <FontAwesomeIcon icon={faFlag} />
    </div>
  )
}

export default FlagIcon