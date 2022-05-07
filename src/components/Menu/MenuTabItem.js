import React from 'react'
import styles from './MenuTab.module.scss'

function MenuTabItem({ icon, title }) {
  return (
    <li className={styles.menuTabItemContainer}>
      <div className={styles.itemContents}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.title}>{title}</span>
      </div>
    </li>
  )
}

MenuTabItem.propTypes = {
  icon: React.Component,
  title: String,
}

export default MenuTabItem
