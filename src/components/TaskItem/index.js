/* eslint-disable react/prop-types */
import classNames from 'classnames'
import styles from './TaskItem.module.scss'

function TaskItem({ isDone, category, content, onToggle }) {
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
        onClick={onToggle}
      />
      <div className={classNames(isDone ? styles.done : '')}>{content}</div>
    </li>
  )
}

export default TaskItem
