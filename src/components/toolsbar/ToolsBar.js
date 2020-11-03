import { Button } from 'antd'
import event from '../../utils/event'

function ToolsBar() {

  return (
    <>
      <div>
        <Button type="primary" onClick={() => event.emit('showDialog', 'echarts')}>图形</Button>
      </div>
      <div>
        <Button type="primary" onClick={() => event.emit('showDialog', 'map')}>地图</Button>
      </div>
    </>
  )
}

export default ToolsBar