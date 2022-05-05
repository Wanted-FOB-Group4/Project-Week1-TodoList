import { useState } from 'react'
import styles from './Category.module.scss'

function CategoryModal({setSelectCategory, onModalClick}) {
  const [todoCategory, setTodoCategory] = useState('')
  const [categoryList, setCategoryList] = useState(['All', 'Person', 'Business'])

  // const [selectCategory, setSelectCategory] = useState('All')
  // const [selectToggle, setSelectToggle] = useState(false)

  const handleCategoryClick = (category) => {
    // setSelectToggle((preState) => !preState)
    // if (selectToggle) {
    //   setSelectCategory(category)
    // } else {
    //   setSelectCategory('')
    // }
  }

  const handleAddCategory = (e) => {
    e.preventDefault()
    if (todoCategory !== ''){
    setCategoryList((prevState) => [...prevState, todoCategory])
    }
    setTodoCategory('')
  }

  const handleChange = (e) => {
    setTodoCategory(e.currentTarget.value)
  }

  return (
    <form className={styles.form} onSubmit={handleAddCategory}>
      <div className={styles.inputbox}>
        <input className={styles.input} type='text' placeholder='create a Category' value={todoCategory} onChange={handleChange} />
        <button className={styles.add} type='button' onClick={handleAddCategory}>+</button>
      </div>
      <div className={styles.todolist}>
        {categoryList.map((category) => <button key={`task-${category}`} className={styles.category} type='button' onClick={() => handleCategoryClick(category)}>{category}</button>)}
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
