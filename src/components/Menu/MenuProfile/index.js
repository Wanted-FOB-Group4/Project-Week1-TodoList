import { useState, useEffect } from 'react'
import styles from './MenuProfile.module.scss'

import { CircularProgressbar } from 'react-circular-progressbar'
import CIRCLE_STYLE from './progressBarStyle'
import { ArrowLeftIcon } from '../../../assets/svgs'

function MenuProfile({ isMenuOpen, firstName, lastName, picSrc, todoMax, todoCount }) {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    setPercentage((todoCount * 100) / todoMax)
  }, [isMenuOpen, todoMax, todoCount])

  const handleBtnClick = () => {
    console.log('clicked')
    // 버튼 클릭 시 메뉴창 닫는 이벤트 추가
  }

  return (
    <div className={styles.profileDiv}>
      <div className={styles.profileSect}>
        <div className={styles.imageDiv}>
          <CircularProgressbar value={percentage} className={styles.progressBar} styles={CIRCLE_STYLE} />
          <img src={picSrc} alt='profilePic' />
        </div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
      </div>
      <button type='button' className={styles.buttonWrapper} onClick={handleBtnClick}>
        <ArrowLeftIcon />
      </button>
    </div>
  )
}

export default MenuProfile
