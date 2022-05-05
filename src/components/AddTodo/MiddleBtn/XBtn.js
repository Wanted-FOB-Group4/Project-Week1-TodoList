import MiddleBtn3 from "./MiddleBtn3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import styles from './MiddleBtn3.module.scss'

function XBtn () {
  return (
    <MiddleBtn3 shape='circle'>
      <div className={styles.xicon}><FontAwesomeIcon icon={faX}/></div>
    </MiddleBtn3>
  )
}

export default XBtn