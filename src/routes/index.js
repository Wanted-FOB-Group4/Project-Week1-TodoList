import { useCallback, useState } from 'react'
import styles from './Routes.module.scss'

import Header from '../components/Header'
import WelcomeMessage from '../components/WelcomeMessage'
import Categories from '../components/Categories'
import Tasks from '../components/Tasks'

// TODO: Make CreateTaskButton
// TODO: Make SectionTitle

function App() {
  const [userName, setUserName] = useState('Joy')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      date: '',
      isDone: false,
      category: 'personal',
      content: 'This is the first task',
    },
  ])

  const handleMenuBtnClick = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)
  }, [setIsMenuOpen])

  // TODO: 메뉴 컴포넌트 props로 내려받을 수 있도록 작업
  const handleMenuCloseBtnClick = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header onMenuBtnClick={handleMenuBtnClick} tasks={tasks} />
        <main>
          <WelcomeMessage name={userName} />
          <Categories />
          <Tasks tasks={tasks} />
        </main>
      </div>
    </div>
  )
}

export default App
