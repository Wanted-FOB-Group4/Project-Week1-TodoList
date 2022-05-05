import styles from './MiddleBtn3.module.scss'

// eslint-disable-next-line react/prop-types
function MiddleBtn3({ children, shape }) {
  return (
    <button className={shape === 'circle' ? styles.circlebtn : styles.ovalbtn} type='button'>
      {children}
    </button>
  )
}

export default MiddleBtn3
