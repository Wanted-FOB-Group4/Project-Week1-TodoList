import ModalPortal from './ModalPortal'
import styles from './Modal.module.scss'
import CategoryModal from '../CategoryModal/CategoryModal'

function Modal ({ onModalClick }) {
  return (
    <ModalPortal>
      { /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */ }
      <div className={styles.background}>
        <div className={styles.content}>
          <CategoryModal onModalClick={onModalClick} />
        </div>
      </div>
    </ModalPortal>
  )
}

Modal.propTypes = {
  onModalClick: Function
}

export default Modal