import styles from './MenuTab.module.scss'
import MenuTabItem from './MenuTabItem'

function MenuTab({ menuData }) {
  return (
    <nav className={styles.menuTabContainer}>
      <ul>
        {menuData.map((i) => (
          <MenuTabItem key={i.id} icon={i.icon} title={i.title} />
        ))}
      </ul>
    </nav>
  )
}

export default MenuTab
