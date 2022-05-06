import ModalPortal from './ModalPortal'
import styles from './Modal.module.scss'
import CategoryModal from '../CategoryModal/CategoryModal'
import classNames from 'classnames'

// eslint-disable-next-line react/prop-types
function Modal({ onClose, onModalClick }) {
  return (
    <ModalPortal>
      {/* <div className={classNames(styles.backgound)}>
        <CategoryModal onModalClick={onModalClick} />
        <div className={styles.content}>코드</div>
        <button type='button' onClick={onClose}>
          닫기
        </button>
      </div> */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className={styles.background} onClick={onModalClick} >
        <div className={styles.content}>
          <CategoryModal onModalClick={onModalClick} />
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
