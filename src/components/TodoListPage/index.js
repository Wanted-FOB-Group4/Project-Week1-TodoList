import { useState, useEffect } from 'react'
import SectionTitle from '../SectionTitle'

function TodoListPage() {
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
      category: 'business',
      content: 'Buy chicken',
    },
    {
      id: 5,
      date: '',
      isDone: true,
      category: 'business',
      content: 'Take over an envelope',
    },
  ])

  return (
    <div className={StyleSheet.todoPageDiv}>
      <SectionTitle title='All TASKS' />
    </div>
  )
}

export default TodoListPage
