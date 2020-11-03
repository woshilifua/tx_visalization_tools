import { Button } from 'antd'

function ToolsBar({ handleClick }) {

  return (
    <>
      <div>
        <Button type="primary" onClick={() => handleClick('echarts')}>图形</Button>
      </div>
      <div>
        <Button type="primary" onClick={() => handleClick('map')}>地图</Button>
      </div>
    </>
  )
}

export default ToolsBar