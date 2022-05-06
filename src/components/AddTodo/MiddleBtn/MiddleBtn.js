import styles from './MiddleBtn.module.scss'

// eslint-disable-next-line react/prop-types
function MiddleBtn({ children, shape }) {
  return (
    <button className={shape === 'circle' ? styles.circlebtn : styles.ovalbtn} type='button'>
      {children}
    </button>
  )
}

export default MiddleBtn
