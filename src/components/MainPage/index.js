import { useState } from 'react'
import Header from '../Header'
import WelcomeMessage from '../WelcomeMessage'
import Categories from '../Categories'
import Tasks from '../Tasks'

function MainPage({
  handleMenuBtnClick,
  userName,
  handleUserNameChange,
  categories,
  setSelectedCategory,
  tasks,
  setTasks,
}) {
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInputChange = (searchChanged) => {
    setSearchInput(searchChanged)
  }

  return (
    <>
      <Header onMenuBtnClick={handleMenuBtnClick} onSearchInputChange={handleSearchInputChange} />
      <main>
        <WelcomeMessage name={userName} onUserNameChange={handleUserNameChange} />
        <Categories categories={categories} setSelectedCategory={setSelectedCategory} />
        <Tasks tasks={tasks} setTasks={setTasks} searchInput={searchInput} />
      </main>
    </>
  )
}
export default MainPage
