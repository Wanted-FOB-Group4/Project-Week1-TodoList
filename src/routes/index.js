import Animation from '../components/Animation'
import styles from './Routes.module.scss'
import { useState } from 'react'
import Modal from '../components/AddTodo/Modal/Modal'

// TODO: Make CreateTaskButton

function App() {
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
      }, 10)
    }
  }
  return (
    <div className={styles.main}>
      <Animation handleModal={handleModal} tasks={tasks} setTasks={setTasks} />
      {modalOn && <Modal onClose={handleModal} active={active} setTasks={setTasks} />}
    </div>
  )
}

export default App
