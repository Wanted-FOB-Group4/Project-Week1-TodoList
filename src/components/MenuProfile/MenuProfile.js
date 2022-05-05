import styles from './MenuProfile.module.scss'

import { CircularProgressbar } from 'react-circular-progressbar'
import CIRCLE_STYLE from './progressBarStyle'

// eslint-disable-next-line react/prop-types
function MenuProfile({ name, picSrc }) {
  return (
    <div className={styles.profileDiv}>
      <div className={styles.profileSect}>
        <div className={styles.imageDiv}>
          <CircularProgressbar value={30} className={styles.progressBar} styles={CIRCLE_STYLE} />
          <img src={picSrc} alt='profilePic' />
        </div>
        <h1>{name}</h1>
      </div>
      <button type='button' className={styles.buttonWrapper}>
        {'<'}
      </button>
    </div>
  )
}

export default MenuProfile
