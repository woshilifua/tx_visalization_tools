import ReactEcharts from "echarts-for-react"
import Map from './components/Map'
import { Row, Col } from 'antd'

function Creator({ dataSource }) {

  return (
    <>
      <Row>
        {dataSource.map(item => {
          return (
            <Col span={12} key={item.id} >
              {
                item.type === 'echarts' && <ReactEcharts option={item.option} />
              }
              {
                item.type === 'map' && <Map option={item.option} id={item.id} />
              }
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Creator