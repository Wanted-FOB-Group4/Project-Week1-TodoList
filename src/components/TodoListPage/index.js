import { useState, useEffect } from 'react'

import { FilterIcon } from '../../assets/svgs'
import styles from './TodoListPage.module.scss'
import TaskItem from '../TaskItem'

function TodoListPage() {
  const [isDecending, setIsDecending] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      date: '',
      isDone: false,
      category: 'personal',
      content: 'This is the first task',
    },
    {
      id: 2,
      date: '',
      isDone: true,
      category: 'business',
      content: 'This is the second task',
    },
    {
      id: 3,
      date: '',
      isDone: false,
      category: 'business',
      content: 'This is the third task',
    },
    {
      id: 4,
      date: '',
      isDone: true,
      category: 'personal',
      content: 'Buy chicken',
    },
    {
      id: 5,
      date: '',
      isDone: true,
      category: 'business',
      content: 'Take over an envelope',
    },
    {
      id: 6,
      date: '',
      isDone: false,
      category: 'personal',
      content: 'Buy coke',
    },
    {
      id: 7,
      date: '',
      isDone: false,
      category: 'business',
      content: 'Send an E-mail',
    },
    {
      id: 8,
      date: '',
      isDone: false,
      category: 'personal',
      content: 'Meet Gildong',
    },
    {
      id: 9,
      date: '',
      isDone: false,
      category: 'personal',
      content: 'Buy Shampoo',
    },
  ])

  useEffect(() => {
    setTasks(
      tasks.sort((a, b) => {
        if (a.isDone) return isDecending ? 1 : -1
        return isDecending ? -1 : 1
      })
    )
  }, [isDecending, tasks])

  const handleToggleTask = (id) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)))
  }

  const handleFilterIconClick = () => {
    setIsDecending((prevState) => !prevState)
  }

  return (
    <div className={styles.todoPageDiv}>
      <header className={styles.todoListPageHeader}>
        <h1>ALL Tasks</h1>
        <button type='button' onClick={handleFilterIconClick}>
          <FilterIcon className={styles.filterIcon} />
        </button>
      </header>
      <main className={styles.todoListPageMain}>
        <ul className={styles.todoListPageList}>
          {tasks.map(({ id, isDone, category, content }) => (
            <TaskItem
              key={`all-task-${id}`}
              isDone={isDone}
              category={category}
              content={content}
              onToggle={() => handleToggleTask(id)}
            />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default TodoListPage
