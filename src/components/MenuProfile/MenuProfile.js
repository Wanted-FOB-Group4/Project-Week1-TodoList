import { useState, useEffect } from 'react'
import styles from './MenuProfile.module.scss'

import { CircularProgressbar } from 'react-circular-progressbar'
import CIRCLE_STYLE from './progressBarStyle'
import ArrowSvg from './ArrowSvg'

// eslint-disable-next-line react/prop-types
function MenuProfile({ name, picSrc, todoMax, todoCount }) {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    setPercentage((todoCount * 100) / todoMax)
  }, [todoMax, todoCount])

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
        <h1>{name}</h1>
      </div>
      <button type='button' className={styles.buttonWrapper} onClick={handleBtnClick}>
        <ArrowSvg />
      </button>
    </div>
  )
}

export default MenuProfile
