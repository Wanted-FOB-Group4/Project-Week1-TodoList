/* eslint-disable react/prop-types */
import styles from './Header.module.scss'
import { ArrowLeftImage, BellImage, SearchImage } from '../../assets/svgs'
import { useState, useCallback, useRef } from 'react'
import classnames from 'classnames'

function Header({ onMenuBtnClick, tasks }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const searchInputRef = useRef(null)

  const searchResults =
    searchInput === '' ? [] : tasks.filter((task) => task.content.toLowerCase().includes(searchInput.toLowerCase()))

  const handleSearchOpenBtnClick = useCallback(() => {
    setIsSearchOpen(true)

    setTimeout(() => {
      searchInputRef.current.focus()
    }, 10)
  }, [])

  const handleSearchCloseBtnClick = useCallback(() => {
    setIsSearchOpen(false)
    setSearchInput('')
  }, [])

  const handleSearchInputChange = useCallback((e) => {
    setSearchInput(e.currentTarget.value)
  }, [])

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
          <button
            type='button'
            className={styles.searchBtn}
            onClick={handleSearchOpenBtnClick}
            aria-label='Search Open'
          >
            <SearchImage className={styles.search} />
          </button>
          <button type='button' className={styles.alarmBtn} aria-label='Alarm'>
            <BellImage className={styles.alarm} />
          </button>
        </div>
      </nav>

      <div className={isSearchOpen ? styles.searchTotalWrapper : styles.hidden}>
        <div className={styles.searchInputWrapper}>
          <button type='button' className={styles.searchCloseBtn} onClick={handleSearchCloseBtnClick}>
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
            onChange={handleSearchInputChange}
          />
        </div>

        <ul className={styles.searchResultWrapper}>
          {searchResults.length > 0
            ? searchResults.map((result) => {
                return (
                  <li
                    key={`search_task_item_${result.id}`}
                    className={classnames(
                      styles.searchItem,
                      { [styles.personal]: result.category === 'personal' },
                      { [styles.business]: result.category === 'business' }
                    )}
                  >
                    {result.content}
                  </li>
                )
              })
            : ''}
        </ul>
      </div>
    </header>
  )
}

export default Header
