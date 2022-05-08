import SectionTitle from '../SectionTitle'
import styles from './Tasks.module.scss'
import TaskItem from '../TaskItem'
import { SwipeableList, SwipeableListItem, SwipeAction, TrailingActions, Type as ListType } from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { TrashImage, SmileImage } from '../../../assets/svgs'

function Tasks({ tasks, setTasks, searchInput, selectedCategory }) {
  const handleToggleTask = (id) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)))
  }

  const handleDeleteClick = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const matchTaskContent = (task) => task.content.toLowerCase().includes(searchInput.toLowerCase())
  const filterTaskByCategory = (task) => task.category.toLowerCase() === selectedCategory.toLowerCase()

  const trailingActions = ({ id }) => (
    <TrailingActions>
      <SwipeAction destructive onClick={() => handleDeleteClick(id)}>
        <div className={styles.deleteButton}>
          <TrashImage className={styles.trashIcon} aria-label='delete' />
        </div>
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <div className={styles.container}>
      <SectionTitle title="TODAY'S TASKS" />
      {tasks.length ? (
        <SwipeableList className={styles.taskList} fullSwipe threshold={0.5} type={ListType.IOS}>
          {tasks
            .filter(matchTaskContent)
            .filter(filterTaskByCategory)
            .map(({ id, isDone, category, content }) => (
              <SwipeableListItem key={`task-${id}`} trailingActions={trailingActions({ id })}>
                <TaskItem isDone={isDone} category={category} content={content} onToggle={() => handleToggleTask(id)} />
              </SwipeableListItem>
            ))}
        </SwipeableList>
      ) : (
        <div className={styles.noTaskMessage}>
          <SmileImage className={styles.smileIcon} />
          <span>오늘 할 일을 모두 마치셨군요!</span>
          <span>즐거운 하루 보내세요.</span>
        </div>
      )}
    </div>
  )
}

export default Tasks
