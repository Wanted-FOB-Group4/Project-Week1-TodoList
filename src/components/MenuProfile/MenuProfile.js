import styles from './MenuProfile.module.scss'

function MenuProfile() {
  return (
    <div className={styles.profileDiv}>
      <div className={styles.profileSect}>
        <img src='logo192.png' alt='profilePic' />
        <h1>Joy Mitchell</h1>
      </div>
      <button type='button' className={styles.buttonWrapper}>
        {'<'}
      </button>
    </div>
  )
}

export default MenuProfile
