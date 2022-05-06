import styles from './BigBtn.module.scss'

// eslint-disable-next-line react/prop-types
function BigBtn({ children, onClickHandle }) {
  return (
    <button className={styles.bigBtn} type='button' onClick={onClickHandle}>
      {children}
    </button>
  )
}

export default BigBtn
