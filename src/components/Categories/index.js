import styles from './Categories.module.scss'

// const TASKS = [
//   {
//     id: 1,
//     date: '',
//     isDone: false,
//     category: 'Personal',
//     content: 'This is the first task',
//   },
//   {
//     id: 2,
//     date: '',
//     isDone: true,
//     category: 'Business',
//     content: 'This is the second task',
//   },
// ]

// const makeCategoryData = (tasks) => {
//   const categoryData = {}
//   tasks.forEach((task) => {
//     if (categoryData[task.category]) {
//       if (task.isDone) {
//         categoryData[task.category].isDone += 1
//       } else {
//         categoryData[task.category].isNotDone += 1
//       }
//     } else {
//       categoryData[task.category] = { isDone: 0, isNotDone: 0 }
//       if (task.isDone) {
//         categoryData[task.category].isDone += 1
//       } else {
//         categoryData[task.category].isNotDone += 1
//       }
//     }
//   })
//   return categoryData
// }

const CATEGORY_DATA = {
  Personal: {
    isDone: 15,
    isNotDone: 15,
  },
  Business: {
    isDone: 10,
    isNotDone: 30,
  },
}

function Categories() {
  const categoryData = CATEGORY_DATA
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>CATEGORIES</h1>
      <ul className={styles.wrapper}>
        {Object.keys(categoryData).map((key) => {
          const color = key === 'Personal' ? 'pink' : 'blue'
          const tasksSum = categoryData[key].isDone + categoryData[key].isNotDone
          const tasksProgress = categoryData[key].isDone / tasksSum
          return (
            <li className={styles.categoryBox} key={key}>
              <div>
                <p className={styles.categoryCount}>{tasksSum} tasks</p>
                <p className={styles.categoryTitle}>{key}</p>
                <div className={styles.categoryProgress}>
                  <div
                    className={`${styles.categoryProgressTrack} ${styles[color]}`}
                    style={{ width: `${tasksProgress * 100}%` }}
                  />
                  <div
                    className={`${styles.categoryProgressThumb} ${styles[color]}`}
                    style={{ left: `${tasksProgress * 100}%` }}
                  />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
