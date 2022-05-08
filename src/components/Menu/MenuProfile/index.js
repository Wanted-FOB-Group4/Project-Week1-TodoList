import { useState, useEffect } from 'react'
import styles from './MenuProfile.module.scss'

import { CircularProgressbar } from 'react-circular-progressbar'
import CIRCLE_STYLE from './progressBarStyle'
import { ArrowLeftIcon } from '../../../assets/svgs'

function MenuProfile({ isMenuOpen, setIsMenuOpen, userName, picSrc, todoMax, todoCount }) {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    if (!isMenuOpen) setPercentage(0)
    else setPercentage((todoCount * 100) / todoMax)
  }, [isMenuOpen, todoMax, todoCount])

  const handleBtnClick = () => {
    setIsMenuOpen((prevState) => !prevState)
    // 버튼 클릭 시 메뉴창 닫는 이벤트 추가
  }

  return (
    <div className={styles.profileDiv}>
      <div className={styles.profileSect}>
        <div className={styles.imageDiv}>
          <CircularProgressbar value={percentage} className={styles.progressBar} styles={CIRCLE_STYLE} />
          <img src={picSrc} alt='profilePic' />
        </div>
        <div className={styles.userName}>{userName}</div>
      </div>
      <button type='button' className={styles.buttonWrapper} onClick={handleBtnClick}>
        <ArrowLeftIcon />
      </button>
    </div>
  )
}

export default MenuProfile
