import styles from './Categories.module.scss'
import SectionTitle from '../SectionTitle'

function Categories({ categories, setSelectedCategory }) {
  const handleCategoryChange = (name) => {
    setSelectedCategory(name)
  }

  return (
    <div className={styles.container}>
      <SectionTitle title='CATEGORIES' />
      <ul className={styles.wrapper}>
        {categories.map(({ name, isDone, total }) => {
          const tasksProgress = isDone / total
          return (
            <li className={styles.categoryBox} key={name}>
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
