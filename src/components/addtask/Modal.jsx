import ModalPortal from './Portal'
import styles from './BigBtn.module.scss'


// eslint-disable-next-line react/prop-types
function Modal({ onClose, classname }) {
  return (
    <ModalPortal>
      <Background className={`${styles.backgound} ${classname ? "activ" : ""}`}>
        <Content className={styles.content}>코드</Content>
        <button type='button' onClick={onClose}>
          닫기
        </button>
      </Background>
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


