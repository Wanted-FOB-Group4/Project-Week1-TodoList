/* eslint-disable react/prop-types */
import { useCallback, useRef, useState } from 'react'
import { PencilImage } from '../../assets/svgs'
import styles from './WelcomeMessage.module.scss'
import classnames from 'classnames'

function WelcomeMessage({ name }) {
  const [nameInput, setNameInput] = useState(name)
  const [isNameInputOpen, setIsNameInputOpen] = useState(false)

  const nameInputRef = useRef(null)

  const handleModifyBtnClick = useCallback(() => {
    if (nameInput === '') {
      alert('이름을 입력해주세요.')
      nameInputRef.current.focus()
      return
    }

    setIsNameInputOpen((prevIsNameInputOpen) => !prevIsNameInputOpen)

    if (!isNameInputOpen) {
      setTimeout(() => {
        nameInputRef.current.focus()
      }, 10)
    }
  }, [nameInput, isNameInputOpen])

  const handleMessageInputChange = useCallback((e) => {
    setNameInput(e.currentTarget.value)
  }, [])

  return (
    <section className={styles.messageSection}>
      <strong className={styles.message}>
        <span className={styles.messageDefault}>What&apos;s up,</span> {nameInput} !
      </strong>

      <div className={isNameInputOpen ? styles.messageInputWrapper : styles.hidden}>
        <label htmlFor='inputMessage' className={styles.visuallyHidden}>
          메세지 입력칸
        </label>
        <input
          type='text'
          id='inputMessage'
          placeholder='Name'
          className={styles.messageInput}
          value={nameInput}
          ref={nameInputRef}
          onChange={handleMessageInputChange}
        />
      </div>

      <button type='button' onClick={handleModifyBtnClick} className={styles.modifyBtn}>
        <PencilImage className={classnames(styles.pencil, { [styles.modify]: isNameInputOpen })} />
        <span className={styles.visuallyHidden}>수정 버튼</span>
      </button>
    </section>
  )
}

export default WelcomeMessage
