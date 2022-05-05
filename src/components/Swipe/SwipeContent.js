/* eslint-disable react/prop-types */
import './SwipeContent.scss'

function SwipeContent({ label, position }) {
  return (
    <div className={`swipeableListItemContent-${position}`}>
      <span>{label}</span>
    </div>
  )
}

export default SwipeContent
