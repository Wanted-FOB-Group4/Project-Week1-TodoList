import { useCallback, useState, useEffect } from 'react'
import styles from './Routes.module.scss'

import Header from '../components/Header'
import WelcomeMessage from '../components/WelcomeMessage'
import Categories from '../components/Categories'
import Tasks from '../components/Tasks'

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

  // TODO: 메뉴 컴포넌트 props로 내려받을 수 있도록 작업
  const handleMenuCloseBtnClick = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

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
        <Header onMenuBtnClick={handleMenuBtnClick} tasks={tasks} />
        <main>
          <WelcomeMessage name={userName} />
          <Categories categories={categories} setSelectedCategory={setSelectedCategory} />
          <Tasks tasks={tasks} setTasks={setTasks} />
        </main>
      </div>
    </div>
  )
}

export default App
