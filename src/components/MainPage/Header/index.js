import { useState, useRef, useEffect } from 'react'
import styles from './Header.module.scss'
import { ArrowLeftImage, BellImage, SearchImage } from '../../../assets/svgs'

function Header({ onMenuBtnClick, onSearchInputChange }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const searchInputRef = useRef(null)

  useEffect(() => {
    searchInputRef.current.focus()
  }, [isSearchOpen])

  const handleSearchBtnClick = () => {
    setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen)

    if (searchInput.length > 0) {
      onSearchInputChange('')
      setSearchInput('')
    }
  }

  const handleInputChange = (e) => {
    onSearchInputChange(e.currentTarget.value)
    setSearchInput(e.currentTarget.value)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <button type='button' className={styles.menuBtn} onClick={onMenuBtnClick}>
          <div className={styles.menuLine}>
            <span className={styles.visuallyHidden}>메뉴 라인</span>
          </div>
          <div className={styles.menuLine}>
            <span className={styles.visuallyHidden}>메뉴 라인</span>
          </div>
        </button>

        <div className={styles.btnWrapper}>
          <button type='button' className={styles.searchBtn} onClick={handleSearchBtnClick} aria-label='Search Open'>
            <SearchImage className={styles.search} />
          </button>
          <button type='button' className={styles.alarmBtn} aria-label='Alarm'>
            <BellImage className={styles.alarm} />
          </button>
        </div>
      </nav>

      <div className={isSearchOpen ? styles.searchTotalWrapper : styles.hidden}>
        <div className={styles.searchInputWrapper}>
          <button type='button' className={styles.searchCloseBtn} onClick={handleSearchBtnClick}>
            <ArrowLeftImage />
          </button>

          <label htmlFor='inputSearch' className={styles.visuallyHidden}>
            검색칸
          </label>
          <input
            type='text'
            id='inputSearch'
            className={styles.searchInput}
            placeholder='Task Search'
            value={searchInput}
            ref={searchInputRef}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
