import { useState } from 'react'

import SwipeableListItem, { ActionAnimations } from './SwipeableItem'
import SwipeContent from './SwipeContent'

function SwipeItem({ children, onSwipeLeft }) {
  const [triggeredItemAction, triggerItemAction] = useState('None')
  const [swipeProgress, handleSwipeProgress] = useState()
  const [swipeAction, handleSwipeAction] = useState('None')

  const swipeRightOptions = (name) => ({
    content: <SwipeContent label='Left content' position='left' />,
    action: () => triggerItemAction(`Swipe right action on "${name}"`),
  })

  const swipeLeftOptions = (name) => ({
    content: (
      <SwipeContent label='삭제' position='right'>
        {children}
      </SwipeContent>
    ),
    action: () => triggerItemAction(`Swipe left action on "${name}"`),
  })

  const handleSwipeStart = () => {
    triggerItemAction('None')
    handleSwipeAction('Swipe started')
  }

  const handleSwipeEnd = () => {
    handleSwipeAction('Swipe ended')
    handleSwipeProgress()
    onSwipeLeft()
  }

  return (
    <SwipeableListItem
      swipeLeft={swipeLeftOptions('Item with left swipes')}
      onSwipeEnd={handleSwipeEnd}
      onSwipeProgress={handleSwipeProgress}
      onSwipeStart={handleSwipeStart}
    >
      {children}
    </SwipeableListItem>
  )
}

export default SwipeItem
