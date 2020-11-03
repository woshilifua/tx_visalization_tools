import event from '../../utils/event'
import ReactDOM from 'react-dom'
import { Row } from 'antd'
import { useEffect } from 'react'
import { Echarts } from '../../utils/element'
import { createElement } from '../../utils/common'

let elementCreator = null

/* 
  componentDidMount 后，创建一个 elementCreator,
  通过监听 createElement 事件判断添加的数据类型
*/



function Creator() {

  useEffect(() => {
    elementCreator = createElement('creator')
    event.on('createElement', option => {
      elementCreator(id => {
        ReactDOM.render(
          <Echarts option={option} />
          ,
          document.getElementById(id)
        )
      })
    })
    return (() => {
      event.off('createElement')
    })
  }, [])

  return (
    <Row id="creator"></Row>
  )
}

export default Creator