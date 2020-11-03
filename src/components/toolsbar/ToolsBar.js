import { Button } from 'antd'
import event from '../../utils/event'

function ToolsBar() {

  return (
    <>
      <div>
        <Button type="primary" onClick={() => event.emit('showDialog', 'bar')}>添加柱状图</Button>
      </div>
      <div>
        <Button type="primary" onClick={() => event.emit('createElement', 'line')}>添加线性图</Button>
      </div>
    </>
  )
}

export default ToolsBar