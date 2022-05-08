import MiddleBtn from './MiddleBtn'
import styles from './MiddleBtn.module.scss'

function CategoryBtn({ handleModalClick }) {
  return (
    <MiddleBtn shape='circle'>
      <div className={styles.outerCircle} aria-hidden onClick={() => handleModalClick(false)}>
        <div className={styles.innerCircle} />
      </div>
    </MiddleBtn>
  )
}

export default CategoryBtn
