import styles from './BigBtn.module.scss'
import classNames from 'classnames'

// eslint-disable-next-line react/prop-types
function BigBtn({ children, onClickHandle, circle }) {
  return (
    <button className={classNames(styles.bigBtn, styles.circle)} type='button' onClick={onClickHandle} width='20px'>
      {children}
    </button>
  )
}

export default BigBtn
