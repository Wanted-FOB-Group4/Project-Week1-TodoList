import MiddleBtn from "./MiddleBtn"
import styles from './MiddleBtn.module.scss'

function CategoryBtn ({onModalClick}) {
  return (
    <MiddleBtn shape='circle'>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className={styles.background} onClick={onModalClick}>
        <div className={styles.category} />
      </div>
    </MiddleBtn>
  )
}

CategoryBtn.propTypes = {
  onModalClick: Function
}

export default CategoryBtn