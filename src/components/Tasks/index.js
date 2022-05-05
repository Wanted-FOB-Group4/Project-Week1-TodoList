import SectionTitle from '../SectionTitle'
import styles from './Tasks.module.scss'
import Swipe from '../Swipe'
import TaskItem from '../TaskItem'

function Tasks({ tasks, setTasks }) {
  const handleToggleTask = (id) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)))
  }

  const handleSwipeLeftTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  return (
    <div className={styles.container}>
      <SectionTitle title="TODAY'S TASKS" />
      {tasks.length ? (
        <ul className={styles.taskList}>
          {tasks.map(({ id, isDone, category, content }) => (
            // TODO: 스와이프 후 딜레이, undo 할 수 있도록
            // TODO: 스와이프 디자인
            <Swipe onSwipeLeft={() => handleSwipeLeftTask(id)}>
              <TaskItem
                key={`task-${id}`}
                isDone={isDone}
                category={category}
                content={content}
                onToggle={() => handleToggleTask(id)}
              />
            </Swipe>
          ))}
        </ul>
      ) : (
        <div style={{ marginTop: '20px' }}>할 일을 다하다니 부지런하군!</div>
      )}
    </div>
  )
}

export default Tasks
