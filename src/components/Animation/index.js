import { useState } from 'react'

import { motion } from 'framer-motion'

import styles from './Animation.module.scss'
import Menu from '../Menu'
import MainPage from '../MainPage'

function Animation({ handleModal, tasks, setTasks }) {
  const [isOpen, setIsOpen] = useState(false)
  const [userName, setUserName] = useState('Joy')

  const todoVariants = {
    open: { x: 200, scale: 0.88, transition: { type: 'linear', duration: 0.4 } },
    close: { x: 0, scale: 1, transition: { type: 'tween', ease: 'linear', duration: 0.3 } },
  }

  const handleMenuBtn = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleUserNameChange = (nameInput) => {
    setUserName(nameInput)
  }

  return (
    <div className={styles.animationWrapper}>
      <Menu isMenuOpen={isOpen} setIsMenuOpen={setIsOpen} />
      <motion.div className={styles.todoComponent} variants={todoVariants} animate={isOpen ? 'open' : 'close'}>
        <div className={styles.container}>
          <MainPage
            handleMenuBtnClick={handleMenuBtn}
            userName={userName}
            handleUserNameChange={handleUserNameChange}
            handleModal={handleModal}
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Animation
