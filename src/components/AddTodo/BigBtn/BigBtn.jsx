import styles from './BigBtn.module.scss'
import classNames from 'classnames'

// eslint-disable-next-line react/prop-types
function BigBtn({ children, onClickHandle, circle }) {
  return (
    <button className={classNames(styles.bigBtn, { [styles.circle]: circle })} type='button' onClick={onClickHandle}>
      {children}
    </button>
  )
}

export default BigBtn
