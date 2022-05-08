import { useState } from 'react'

import { motion } from 'framer-motion'

import styles from './Animation.module.scss'
import Menu from '../Menu/Menu'

function Animation() {
  const [isOpen, setIsOpen] = useState(true)

  const todoVariants = {
    open: { x: 200, scale: 0.88, transition: { type: 'linear', duration: 0.4 } },
    close: { x: 0, scale: 1, transition: { type: 'tween', ease: 'linear', duration: 0.3 } },
  }

  const handleMenuBtn = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className={styles.animationWrapper}>
      <Menu isMenuOpen={isOpen} setIsMenuOpen={setIsOpen} />
      <motion.div className={styles.todoComponent} variants={todoVariants} animate={isOpen ? 'open' : 'close'}>
        {/* todo component */}
        <div className={styles.iconWrapper}>
          <button type='button' className={styles.menuIcons} onClick={handleMenuBtn}>
            +
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Animation
