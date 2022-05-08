import styles from './MiddleBtn.module.scss'

// eslint-disable-next-line react/prop-types
function MiddleBtn({ children, shape, onClose }) {
  return (
    <div className={shape === 'circle' ? styles.circleBtn : styles.ovalBtn} type='button' onClick={onClose} aria-hidden>
      {children}
    </div>
  )
}

export default MiddleBtn
