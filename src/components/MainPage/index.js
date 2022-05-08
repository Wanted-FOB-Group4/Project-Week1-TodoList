import { useState } from 'react'
import Header from './Header'
import WelcomeMessage from './WelcomeMessage'
import Categories from './Categories'
import Tasks from './Tasks'
import { PlusIcon } from '../../assets/svgs'
import BigBtn from '../AddTodo/BigBtn/BigBtn'

function MainPage({ handleMenuBtnClick, userName, handleUserNameChange, handleModal, tasks, setTasks }) {
  const [searchInput, setSearchInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [categories, setCategories] = useState([
    {
      name: 'All',
      isDone: 25,
      total: 70,
    },
    {
      name: 'Personal',
      isDone: 15,
      total: 30,
    },
    {
      name: 'Business',
      isDone: 10,
      total: 40,
    },
  ])

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
      <BigBtn circle='true' onClickHandle={handleModal}>
        <PlusIcon />
      </BigBtn>
    </>
  )
}
export default MainPage
