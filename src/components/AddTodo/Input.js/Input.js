import { useState } from "react"
import styles from './Input.module.scss'

function Input () {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.currentTarget.value)
  }

  return (
    <input className={styles.input} type='text' placeholder="Enter new task" onChange={(e) => handleInputChange(e)} value={input} />
  )
}

export default Input