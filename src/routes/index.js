import { useState } from 'react'
import styles from './Routes.module.scss'

import Header from '../components/Header'
import WelcomeMessage from '../components/WelcomeMessage'
import Categories from '../components/Categories'
import Tasks from '../components/Tasks'

// TODO: Make CreateTaskButton
// TODO: Make SectionTitle

function App() {
  const [userName, setUserName] = useState('Joy')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      date: '',
      isDone: false,
      category: 'personal',
      content: 'This is the first task',
    },
  ])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <main>
          <WelcomeMessage userName={userName} />
          <Categories />
          <Tasks tasks={tasks} />
        </main>
      </div>
    </div>
  )
}

export default App
