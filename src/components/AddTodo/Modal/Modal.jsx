import ModalPortal from './ModalPortal'
import styles from './Modal.module.scss'
import CategoryModal from '../CategoryModal/CategoryModal'

// eslint-disable-next-line react/prop-types
function Modal({ onClose, classname }) {
  const onModalClick = () => {}
  return (
    <ModalPortal>
      <div className={`${styles.backgound} ${classname ? 'activ' : ''}`}>
        <CategoryModal onModalClick={onModalClick} />
        <div className={styles.content}>코드</div>
        <button type='button' onClick={onClose}>
          닫기
        </button>
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
