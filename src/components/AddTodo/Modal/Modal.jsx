import ModalPortal from './ModalPortal'
import styles from './Modal.module.scss'
import CategoryModal from '../CategoryModal/CategoryModal'
import classNames from 'classnames'
import XBtn from '../MiddleBtn/XBtn'

// eslint-disable-next-line react/prop-types
function Modal({ onClose, onModalClick, active }) {
  return (
    <ModalPortal>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className={classNames(styles.background)} onClick={onModalClick}>
        <div className={classNames(styles.content)}>
          <div className={classNames(styles.page, { [styles.active]: active })}>
            <div className={styles.xbtn}>
              <XBtn onClose={onClose} />
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  )
}
// const handleModal = () => {
//   if (modalOn === true) {
//     setClassName((prev) => !prev)
//     setTimeout(() => {
//       setModalOn(!modalOn)
//     }, 1000)
//   } else {
//     setModalOn((prev) => !prev)
//     setTimeout(() => {
//       setClassName((prev) => !prev)
//     }, 10)
//   }
// }
// {modalOn && <Modal onClose={handleModal} classname={classname} />}

export default Modal
