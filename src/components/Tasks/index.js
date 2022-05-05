/* eslint-disable react/prop-types */

import SectionTitle from '../SectionTitle'
import styles from './Tasks.module.scss'
import TaskItem from '../TaskItem'

function Tasks({ tasks, setTasks }) {
  const handleToggleTask = (id) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)))
  }

  const handleClickDeleteButton = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  return (
    <div className={styles.container}>
      <SectionTitle title="TODAY'S TASKS" />
      {tasks.length ? (
        <ul className={styles.taskList}>
          {tasks.map(({ id, isDone, category, content }) => (
            <TaskItem
              key={`task-${id}`}
              isDone={isDone}
              category={category}
              content={content}
              onToggle={() => handleToggleTask(id)}
              onClick={() => handleClickDeleteButton(id)}
            />
          ))}
        </ul>
      ) : (
        <div style={{ marginTop: '20px' }}>할 일을 다하다니 부지런하군!</div>
      )}
    </div>
  )
}

export default Tasks
