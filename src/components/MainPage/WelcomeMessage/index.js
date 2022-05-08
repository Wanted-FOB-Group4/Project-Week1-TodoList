import { useState, useRef, useEffect } from 'react'
import { PencilImage } from '../../../assets/svgs'
import styles from './WelcomeMessage.module.scss'
import classnames from 'classnames'

function WelcomeMessage({ name, onUserNameChange }) {
  const [nameInput, setNameInput] = useState(name)
  const [isNameInputOpen, setIsNameInputOpen] = useState(false)
  const nameInputRef = useRef(null)

  useEffect(() => {
    nameInputRef.current.focus()
  }, [isNameInputOpen])

  const handleNameInputChange = (e) => {
    setNameInput(e.currentTarget.value)
  }

  const handleModifyBtnClick = () => {
    setIsNameInputOpen((prevIsNameInputOpen) => !prevIsNameInputOpen)
  }

  const handleSaveBtnClick = () => {
    if (nameInput === '') {
      alert('이름을 입력해 주세요.')
      nameInputRef.current.focus()
      return
    }

    onUserNameChange(nameInput)
    setIsNameInputOpen((prevIsNameInputOpen) => !prevIsNameInputOpen)
  }

  return (
    <section className={styles.messageSection}>
      <strong className={styles.message}>
        <span className={styles.messageDefault}>What&apos;s up,</span>
        {nameInput} !
      </strong>

      <div className={isNameInputOpen ? styles.messageInputWrapper : styles.hidden}>
        <label htmlFor='inputName' className={styles.visuallyHidden}>
          메세지 입력칸
        </label>
        <input
          type='text'
          id='inputName'
          placeholder='Name'
          className={styles.nameInput}
          value={nameInput}
          ref={nameInputRef}
          onChange={handleNameInputChange}
        />
      </div>

      {isNameInputOpen ? (
        <button type='button' onClick={handleSaveBtnClick} className={styles.saveBtn} aria-label='Save'>
          <PencilImage className={classnames(styles.pencil, styles.save)} />
        </button>
      ) : (
        <button type='button' onClick={handleModifyBtnClick} className={styles.modifyBtn} aria-label='Modify'>
          <PencilImage className={classnames(styles.pencil, styles.modify)} />
        </button>
      )}
    </section>
  )
}

export default WelcomeMessage
