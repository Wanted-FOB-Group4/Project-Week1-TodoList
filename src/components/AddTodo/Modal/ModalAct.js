import { useState } from 'react'
import CategoryBtn from '../MiddleBtn/CategoryBtn'
import Modal from './Modal'

function ModalAct() {
  const [onModal, setOnModal] = useState(false)
  
  const handleModal = () => setOnModal((preState) => !preState)

  return (
    <>
      <CategoryBtn onModalClick={handleModal} />
      {onModal && <Modal onModalClick={handleModal} />}
    </>
  )
}

export default ModalAct
