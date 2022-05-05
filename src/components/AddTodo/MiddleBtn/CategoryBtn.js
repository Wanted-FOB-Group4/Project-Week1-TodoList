import MiddleBtn3 from "./MiddleBtn3"
import styles from './MiddleBtn3.module.scss'

function CategoryBtn () {
  return (
    <MiddleBtn3 shape='circle'>
      <div className={styles.category} />
    </MiddleBtn3>
  )
}

export default CategoryBtn