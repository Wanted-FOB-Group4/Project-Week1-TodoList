/* eslint-disable react/prop-types */
import classNames from 'classnames'

import SectionTitle from '../SectionTitle'
import styles from './Tasks.module.scss'

function Tasks({ tasks, setTasks }) {
  const handleToggleTask = (id) => {
    setTasks((_) => tasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)))
  }

  return (
    <div className={styles.container}>
      <SectionTitle title="TODAY'S TASKS" />
      <ul className={styles.taskList}>
        {tasks.map(({ id, isDone, category, content }) => (
          <TaskItem
            key={`task-${id}`}
            isDone={isDone}
            category={category}
            content={content}
            onClick={() => handleToggleTask(id)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Tasks

function TaskItem({ isDone, category, content, onClick }) {
  return (
    <li>
      <button
        type='button'
        aria-label='Toggle Task'
        className={classNames(
          styles.doneCircle,
          category === 'personal' ? styles.personal : styles.business,
          isDone ? styles.done : ''
        )}
        onClick={onClick}
      />
      <div className={classNames(isDone ? styles.done : '')}>{content}</div>
    </li>
  )
}
