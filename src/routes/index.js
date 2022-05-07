import { useState, useEffect } from 'react'
import styles from './Routes.module.scss'

import Header from '../components/Header'
import WelcomeMessage from '../components/WelcomeMessage'
import Categories from '../components/Categories'
import Tasks from '../components/Tasks'
// import Animation from '../components/animation/Animation'

// TODO: Make CreateTaskButton

function App() {
  const [userName, setUserName] = useState('Joy')
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
        <Header />
        <main>
          <WelcomeMessage userName={userName} />
          <Categories categories={categories} setSelectedCategory={setSelectedCategory} />
          <Tasks tasks={tasks} setTasks={setTasks} />
        </main>
      </div>
    </div>
  )
}

/*
return (
    <div className={styles.main}>
      <Animation />
      </div>
      */

export default App
