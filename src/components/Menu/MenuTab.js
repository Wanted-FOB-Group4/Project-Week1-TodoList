import styles from './MenuTab.module.scss'
import MenuTabItem from './MenuTabItem'
import { ChartIcon, CategoryIcon, SettingIcon, BookMarkIcon } from '../../assets/svgs'

const INIT_MENU = [
  { id: 'menu_tab_1', icon: <BookMarkIcon />, title: 'Templates' },
  { id: 'menu_tab_2', icon: <CategoryIcon />, title: 'Categories' },
  { id: 'menu_tab_3', icon: <ChartIcon />, title: 'Analytics' },
  { id: 'menu_tab_4', icon: <SettingIcon />, title: 'Settings' },
]

function MenuTab() {
  return (
    <nav className={styles.menuTabContainer}>
      <ul>
        {INIT_MENU.map((i) => (
          <MenuTabItem key={i.id} icon={i.icon} title={i.title} />
        ))}
      </ul>
    </nav>
  )
}

export default MenuTab
