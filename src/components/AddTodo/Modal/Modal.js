import ModalPortal from './ModalPortal'
import styles from './Modal.module.scss'
import CategoryModal from '../CategoryModal/CategoryModal'
import classNames from 'classnames'
import XBtn from '../MiddleBtn/XBtn'
import Input from '../Input/Input'
import DateBtn from '../MiddleBtn/DateBtn'
import CategoryBtn from '../MiddleBtn/CategoryBtn'
import Icons from '../Icons/Icons'
import { useState } from 'react'
import { dateFormat } from '../FunctionBundle'
import BigBtn from '../BigBtn/BigBtn'
import { PlusIcon } from '../../../assets/svgs'

// eslint-disable-next-line react/prop-types
function Modal({ onClose, onModalClick, active, setTasks }) {
  const [todoText, setTodoText] = useState('')
  const [formatDate, setFormatDate] = useState(dateFormat(new Date()))
  const [selectCategory, setSelectCategory] = useState('All')
  const [closeModal, setCloseModal] = useState(true)

  const handleInputChange = (e) => {
    setTodoText(e.currentTarget.value)
  }

  const handleSelectDate = (date) => {
    setFormatDate(dateFormat(date))
  }

  const handleModalClick = (bool) => {
    setCloseModal(bool)
  }
  const handleAddTaskClick = () => {
    const newTask = { id: formatDate, date: formatDate, category: selectCategory, content: todoText, isDone: false }
    setTasks((prev) => [...prev, newTask])
    onClose()
  }
  return (
    <ModalPortal>
      <div className={styles.background} aria-hidden onClick={onModalClick}>
        <div className={styles.content}>
          <div className={classNames(styles.page, { [styles.active]: active })}>
            <div className={styles.xBtn}>
              <XBtn onClose={onClose} />
            </div>
            <main className={styles.mainForm}>
              <Input handleInputChange={handleInputChange} todoValue={todoText} />
              <div className={styles.buttonForm}>
                <DateBtn handleSelectDate={handleSelectDate} />
                <CategoryBtn handleModalClick={handleModalClick} />
                <div
                  className={styles.categoryModal}
                  aria-hidden
                  style={closeModal ? { display: 'none' } : { display: 'inline-block' }}
                >
                  <CategoryModal handleModalClick={handleModalClick} handleSelectCategory={setSelectCategory} />
                </div>
              </div>
              <div
                className={styles.modalBackground}
                style={closeModal ? { display: 'none' } : { display: 'inline-block' }}
                aria-hidden
                onClick={() => handleModalClick(true)}
              />

              <div className={styles.optionIconBox}>
                <Icons />
              </div>
            </main>
            <BigBtn onClickHandle={handleAddTaskClick}>
              New task
              <PlusIcon />
            </BigBtn>
          </div>
        </div>
      </div>
    </ModalPortal>
  )
}
export default Modal
