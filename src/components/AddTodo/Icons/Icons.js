import styles from './Icons.module.scss'
import FolderIcon from './folderIcon'
import FlagIcon from './FlagIcon'
import MoonIcon from './MoonIcon'

function Icons () {
  return (
    <div className={styles.box}>
      <FolderIcon />
      <FlagIcon />
      <MoonIcon />
    </div>
  )
}

export default Icons