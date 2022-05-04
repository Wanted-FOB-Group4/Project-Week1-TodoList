import styles from './MenuProfile.module.scss'

function MenuProfile() {
  return (
    <div className={styles.profileDiv}>
      <div className={styles.profileSect}>
        <img src='logo192.png' alt='profilePic' />
        <h1 className='nickname'>TestNickname</h1>
      </div>
      <button type='button'>{'<'}</button>
    </div>
  )
}

export default MenuProfile
