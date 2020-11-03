import event from '../../utils/event'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import { Echarts } from '../../utils/element'
import { createElement } from '../../utils/common'

let elementCreator = null

/* 
  componentDidMount 后，创建一个 elementCreator,
  通过监听 createElement 事件判断添加的数据类型
*/

event.on('createElement', (type) => {
  elementCreator(id => {
    ReactDOM.render(
      <Echarts type={type} />,
      document.getElementById(id)
    )
  })
})

function Creator() {

  useEffect(() => {
    elementCreator = createElement('creator')
  }, [])

  return (
    <div id="creator"></div>
  )
}

export default Creator