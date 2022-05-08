import { useState, useEffect } from 'react'
import Header from './Header'
import WelcomeMessage from './WelcomeMessage'
import Categories from './Categories'
import Tasks from './Tasks'
import { PlusIcon } from '../../assets/svgs'
import BigBtn from '../AddTodo/BigBtn/BigBtn'
import Modal from '../AddTodo/Modal/Modal'

function MainPage({ handleMenuBtnClick, userName, handleUserNameChange }) {
  const [modalOn, setModalOn] = useState(false)
  const [active, setActive] = useState(false)
  const handleModal = () => {
    if (modalOn === true) {
      setActive((prev) => !prev)
      setTimeout(() => {
        setModalOn(!modalOn)
      }, 500)
    } else {
      setModalOn((prev) => !prev)
      setTimeout(() => {
        setActive((prev) => !prev)
      }, 10)
    }
  }
  const [searchInput, setSearchInput] = useState('')
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
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [
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
    ]
  )

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleSearchInputChange = (searchChanged) => {
    setSearchInput(searchChanged)
  }

  return (
    <>
      <Header onMenuBtnClick={handleMenuBtnClick} onSearchInputChange={handleSearchInputChange} />
      <main>
        <WelcomeMessage name={userName} onUserNameChange={handleUserNameChange} />
        <Categories tasks={tasks} setSelectedCategory={setSelectedCategory} />
        <Tasks tasks={tasks} setTasks={setTasks} searchInput={searchInput} />
        {modalOn && <Modal onClose={handleModal} active={active} setTasks={setTasks} />}
      </main>
      <BigBtn circle='true' onClickHandle={handleModal}>
        <PlusIcon />
      </BigBtn>
    </>
  )
}
export default MainPage
