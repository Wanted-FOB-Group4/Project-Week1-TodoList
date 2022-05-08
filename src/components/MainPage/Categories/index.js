import styles from './Categories.module.scss'
import SectionTitle from '../SectionTitle'

function makeCategoryData(tasks) {
  const newArr = [{ name: 'All', isDone: 0, total: 0 }]
  tasks.forEach((task) => {
    const categoryIdx = newArr.findIndex((category) => {
      return category.name.toLowerCase() === task.category.toLowerCase()
    })

    const done = task.isDone ? 1 : 0
    const category = task.category[0].toUpperCase() + task.category.slice(1)

    if (categoryIdx === -1) {
      newArr.push({ name: category, isDone: done, total: 1 })
    } else {
      newArr[categoryIdx].total += 1
      newArr[categoryIdx].isDone += done
    }

    newArr[0].total += 1
    newArr[0].isDone += done
  })

  return newArr
}

function Categories({ tasks, setSelectedCategory }) {
  const handleCategoryChange = (name) => {
    setSelectedCategory(name)
  }

  const categories = makeCategoryData(tasks)

  return (
    <div className={styles.container}>
      <SectionTitle title='CATEGORIES' />
      <ul className={styles.wrapper}>
        {categories.map(({ name, isDone, total }) => {
          const tasksProgress = isDone / total
          return (
            <li className={styles.categoryBox} key={`category-${name}`}>
              <button type='button' onClick={() => handleCategoryChange(name)}>
                <p className={styles.categoryCount}>{total} tasks</p>
                <p className={styles.categoryTitle}>{name}</p>
                <div className={styles.categoryProgress}>
                  <div
                    className={`${styles.categoryProgressTrack} ${styles[name.toLowerCase()]}`}
                    style={{ width: `${tasksProgress * 100}%` }}
                  />
                  <div
                    className={`${styles.categoryProgressThumb} ${styles[name.toLowerCase()]}`}
                    style={{ left: `${tasksProgress * 100}%` }}
                  />
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
