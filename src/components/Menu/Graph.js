import styles from './Graph.module.scss'
import { VictoryAxis, VictoryChart, VictoryContainer, VictoryLine } from 'victory'
import { useEffect, useState } from 'react'

// const INIT_DATA = [
//   { x: 1, y: 0 },
//   { x: 2, y: 3 },
//   { x: 3, y: 1 },
//   { x: 4, y: 4 },
//   { x: 5, y: 2 },
//   { x: 6, y: 6 },
//   { x: 7, y: 2 },
//   { x: 8, y: 3 },
//   { x: 9, y: 5 },
// ]

function Graph({ isRendered, data }) {
  // isRendered : 메뉴가 열린 상태 판단 (boolean)
  // data : 그래프에 들어갈 데이터

  const [graphData, setGraphData] = useState(data)
  const [toDayId, setToDayId] = useState(data[data.length - 1].x)

  // 오늘 완료한 항목의 개수 카운트할 함수
  const handleCompleteTodo = (e) => {
    let doneCnt = graphData[toDayId - 1].y
    doneCnt += 1
    setGraphData((prev) => {
      const targetIdx = prev.findIndex((todo) => todo.x === Number(toDayId))
      const newList = [...prev]
      newList[targetIdx].y = doneCnt
      return newList
    })
  }

  return (
    <div className={styles.graphContainer}>
      {isRendered && (
        <VictoryChart animate={{ duration: 1000 }} containerComponent={<VictoryContainer />} width={500} height={300}>
          <VictoryLine
            data={graphData}
            width={400}
            height={400}
            padding={{ top: 20, bottom: 60 }}
            interpolation='basis'
            style={{ data: { strokeWidth: 4, stroke: '#0C72F9' } }}
          />
          <VictoryAxis
            style={{
              axis: { stroke: 'transparent' },
              ticks: { stroke: 'transparent' },
              tickLabels: { fill: 'transparent' },
            }}
          />
        </VictoryChart>
      )}
    </div>
  )
}

export default Graph
