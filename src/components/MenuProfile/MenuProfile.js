import styles from './MenuProfile.module.scss'

import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

const CIRCLE_STYLE = {
  root: {},
  path: {
    stroke: 'rgba(62, 152, 199, 100%)',
    strokeLinecap: 'butt',
    transition: 'stroke-dashoffset 0.5s ease 0s',
    transform: 'rotate(0.25turn)',
    transformOrigin: 'center center',
  },
  trail: {
    stroke: '#d6d6d6',
    strokeLinecap: 'butt',
    transform: 'rotate(0.25turn)',
    transformOrigin: 'center center',
  },
  text: {
    fill: '#f88',
    fontSize: '16px',
  },
  background: {
    fill: '#3e98c7',
  },
}

// eslint-disable-next-line react/prop-types
function MenuProfile({ name, picSrc }) {
  return (
    <div className={styles.profileDiv}>
      <div className={styles.profileSect}>
        <CircularProgressbarWithChildren value={66} className={styles.progressBar} styles={CIRCLE_STYLE}>
          <img src={picSrc} alt='profilePic' />
        </CircularProgressbarWithChildren>
        <h1>{name}</h1>
      </div>
      <button type='button' className={styles.buttonWrapper}>
        {'<'}
      </button>
    </div>
  )
}

export default MenuProfile
