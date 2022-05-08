import { useState } from 'react'

import styles from './SettingsPage.module.scss'

function SettingsPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  return (
    <div className={styles.settingsPageDiv}>
      <header className={styles.settingsPageHeader}>
        <h1>Settings</h1>
      </header>
      <main className={styles.settingsPageMain}>
        <h3>Change Nickname</h3>
        <form>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            name='firstName'
            placeholder='Enter First Name'
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name='lastName'
            placeholder='Enter Last Name'
            value={lastName}
            onChange={handleLastNameChange}
          />
          <button type='submit'>Save</button>
        </form>
      </main>
    </div>
  )
}

export default SettingsPage
