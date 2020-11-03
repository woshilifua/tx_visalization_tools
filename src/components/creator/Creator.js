import ReactEcharts from "echarts-for-react"
import { Row, Col } from 'antd'

function Creator({ dataSource }) {

  return (
    <>
      <Row>
        {dataSource.map(item => {
          return (
            <Col span={12} key={item.id} >
              <ReactEcharts option={item.option} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Creator