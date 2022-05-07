import styles from './MiddleBtn.module.scss'

// eslint-disable-next-line react/prop-types
function MiddleBtn({ children, shape, onClose }) {
  return (
    <button className={shape === 'circle' ? styles.circleBtn : styles.ovalBtn} type='button' onClick={onClose}>
      {children}
    </button>
  )
}

export default MiddleBtn
