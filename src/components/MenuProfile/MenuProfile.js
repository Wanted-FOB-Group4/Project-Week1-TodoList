import styles from './MenuProfile.module.scss'

function MenuProfile({ name, picSrc }) {
  return (
    <div className={styles.profileDiv}>
      <div className={styles.profileSect}>
        <img src={picSrc} alt='profilePic' />
        <h1>{name}</h1>
      </div>
      <button type='button' className={styles.buttonWrapper}>
        {'<'}
      </button>
    </div>
  )
}

MenuProfile.propTypes = {
  name: String,
  picSrc: String,
}

export default MenuProfile
