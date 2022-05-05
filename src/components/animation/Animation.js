import styles from './Animation.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'

function Animation() {
  const [isOpen, setIsOpen] = useState(false)

  const todoVariants = {
    open: { x: 200, scale: 0.88, transition: { type: 'linear', duration: 0.4 } },
    close: { x: 0, scale: 1, transition: { type: 'tween', ease: 'linear', duration: 0.3 } },
  }

  const handleMenuBtn = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.menuComponent}>
      <motion.div className={styles.todoComponent} variants={todoVariants} animate={isOpen ? 'open' : 'close'}>
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
