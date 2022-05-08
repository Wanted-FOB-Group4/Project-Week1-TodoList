import styles from './Input.module.scss'

function Input ({handleInputChange, todoValue}) {

  return (
    <input className={styles.input} type='text' placeholder="Enter new task" onChange={(e) => handleInputChange(e)} value={todoValue} />
  )
}

export default Input