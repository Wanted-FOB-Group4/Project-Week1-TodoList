import { useState, useEffect } from 'react'
import styles from './Routes.module.scss'
import BigBtn from '../components/AddTodo/BigBtn/BigBtn'
import Header from '../components/Header'
import WelcomeMessage from '../components/WelcomeMessage'
import Categories from '../components/Categories'
import Tasks from '../components/Tasks'
import { PlusIcon } from '../assets/svgs'
import Modal from '../components/AddTodo/Modal/Modal'
import DateBtn from '../components/AddTodo/MiddleBtn/DateBtn'
import ModalAct from '../components/AddTodo/Modal/ModalAct'

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
  const [modalOn, setModalOn] = useState(false)
  const [active, setActive] = useState(false)
  const handleModal = () => {
    if (modalOn === true) {
      setActive((prev) => !prev)
      setTimeout(() => {
        setModalOn(!modalOn)
      }, 1000)
    } else {
      setModalOn((prev) => !prev)
      setTimeout(() => {
        setActive((prev) => !prev)
      }, 1)
    }
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
        <Header />
        <main>
          <WelcomeMessage userName={userName} />
          <Categories categories={categories} setSelectedCategory={setSelectedCategory} />
          <Tasks tasks={tasks} setTasks={setTasks} />
          {modalOn && <Modal onClose={handleModal} active={active} />}
        </main>
        <BigBtn circle='true' onClickHandle={handleModal}>
          <PlusIcon />
        </BigBtn>
      </div>
    </div>
  )
}

export default App
