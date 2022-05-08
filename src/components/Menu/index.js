import MenuGraph from './MenuGraph'
import MenuProfile from './MenuProfile'
import MenuTab from './MenuTab'
import styles from './Menu.module.scss'
import { ChartIcon, CategoryIcon, SettingIcon, BookMarkIcon } from '../../assets/svgs'

const INIT_DATA = [
  { x: 1, y: 0 },
  { x: 2, y: 3 },
  { x: 3, y: 1 },
  { x: 4, y: 4 },
  { x: 5, y: 2 },
  { x: 6, y: 6 },
  { x: 7, y: 2 },
  { x: 8, y: 3 },
  { x: 9, y: 5 },
]

const INIT_MENU = [
  { id: 'menu_tab_1', icon: <BookMarkIcon />, title: 'Templates' },
  { id: 'menu_tab_2', icon: <CategoryIcon />, title: 'Categories' },
  { id: 'menu_tab_3', icon: <ChartIcon />, title: 'Analytics' },
  { id: 'menu_tab_4', icon: <SettingIcon />, title: 'Settings' },
]

function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className={styles.menuWrapper}>
      <MenuProfile
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        firstName='Joy'
        lastName='Mitchell'
        picSrc='https://coinpan.com/files/attach/images/198/832/427/277/f337aaeffe1f5e52878e10264278831c.jpg'
        todoCount={10}
        todoMax={25}
      />
      <MenuTab menuData={INIT_MENU} />
      <MenuGraph isMenuOpen={isMenuOpen} data={INIT_DATA} />
      <h4>Good</h4>
      <h2>Consistency</h2>
    </div>
  )
}

export default Menu
