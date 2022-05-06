import { useState } from 'react'
import styles from './Category.module.scss'
import classnames from 'classnames'

function CategoryModal({setSelectCategory, onModalClick}) {
  const [todoCategory, setTodoCategory] = useState('')
  const [categoryList, setCategoryList] = useState(['All', 'Person', 'Business'])

  //  const [selectCategory, setSelectCategory] = useState('All')
   const [buttonToggle, setButtonToggle] = useState(0)

  const handleCategoryClick = (idx) => {
    setButtonToggle(idx)
    // setSelectCategory(categoryList[idx])
  }

  const handleAddCategory = (e) => {
    e.preventDefault()
    if (todoCategory !== ''){
    setCategoryList((prevState) => [...prevState, todoCategory])
    }
    setTodoCategory('')
  }

  const handleTextChange = (e) => {
    setTodoCategory(e.currentTarget.value)
  }

  return (
    <form className={styles.form} onSubmit={handleAddCategory}>
      <div className={styles.inputbox}>
        <input className={styles.input} type='text' placeholder='create a Category' value={todoCategory} onChange={handleTextChange} />
        <button className={styles.add} type='button' onClick={handleAddCategory}>+</button>
      </div>
      <div className={styles.todolist}>
        {categoryList.map((category, idx) => <button key={`task-${category}`} className={classnames(styles.category, {[styles.selectBtn] : buttonToggle === idx})} type='button' onClick={() => handleCategoryClick(idx)}>{category}</button>)}
      </div>
      <button className={styles.select} type='button' onClick={onModalClick}>select</button>
    </form>
  )
}


CategoryModal.propTypes = {
  setSelectCategory: Function,
  onModalClick: Function
}

export default CategoryModal
