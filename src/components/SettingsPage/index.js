import { useState, useEffect } from 'react'

import styles from './SettingsPage.module.scss'

function SettingsPage() {
  const [name, setName] = useState('')

  const handleInputChange = (e) => {
    setName(e.target.value)
  }
  return (
    <div className={styles.settingsPageDiv}>
      <header className={styles.settingsPageHeader}>
        <h1>Settings</h1>
      </header>
      <main className={styles.settingsPageMain}>
        <h3>Change Nickname</h3>
        <form>
          <input type='text' name='name' placeholder='Enter Name' value={name} onChange={handleInputChange} />
          <button type='submit'>Save</button>
        </form>
      </main>
    </div>
  )
}

export default SettingsPage
