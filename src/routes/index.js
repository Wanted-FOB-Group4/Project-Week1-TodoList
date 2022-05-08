import { useCallback, useState, useEffect } from 'react'
import styles from './Routes.module.scss'

import MainPage from '../components/MainPage'

// TODO: Make CreateTaskButton

function App() {
  const [userName, setUserName] = useState('Joy')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [categories, setCategories] = useState([
    {
      name: 'All',
      isDone: 25,
      total: 70,
    },
    {
      name: 'Personal',
      isDone: 15,
      total: 30,
    },
    {
      name: 'Business',
      isDone: 10,
      total: 40,
    },
  ])
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
  ])

  const handleMenuBtnClick = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)
  }, [setIsMenuOpen])

  const handleUserNameChange = (nameChanged) => {
    setUserName(nameChanged)
  }

  // 처음에 localStorage에서 userName과 tasks 불러오기
  useEffect(() => {
    // TODO: setTasks(localStorage.getItem('tasks'))
    // TODO: setTasks(localStorage.getItem('userName'))
  }, [])

  // Tasks 업데이트할 때 localStorage도 업데이트
  useEffect(() => {
    localStorage.setItem('userName', userName)
    localStorage.setItem('tasks', tasks)
  }, [userName, tasks])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <MainPage
          handleMenuBtnClick={handleMenuBtnClick}
          userName={userName}
          handleUserNameChange={handleUserNameChange}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </div>
  )
}

export default App
