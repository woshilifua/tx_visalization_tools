import ReactEcharts from "echarts-for-react"
import Draggable from 'react-draggable'
import Map from './components/Map'
import { Row, Col, Card } from 'antd'

function Creator({ dataSource }) {

  return (
    <>
      <Row>
        {dataSource.map(item => {
          return (
            <Draggable key={item.id}>
              <Col span={item.style.span} >
                {
                  item.type === 'echarts' && <Card size="small" bodyStyle={{ padding: '12px' }}>
                    <ReactEcharts option={item.option} />
                  </Card>
                }
                {
                  item.type === 'map' &&
                  <Card size="small" bodyStyle={{ padding: '0' }} >
                    <Map option={item.option} id={item.id} />
                  </Card>
                }
              </Col>
            </Draggable>
          )
        })}
      </Row>
    </>
  )
}

export default Creator