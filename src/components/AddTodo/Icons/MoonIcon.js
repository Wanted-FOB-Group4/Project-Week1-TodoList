import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import styles from './Icons.module.scss'

function MoonIcon () {
  return (
    <div className={styles.icon}>
      <FontAwesomeIcon icon={faMoon} />
    </div>
  )
}

export default MoonIcon