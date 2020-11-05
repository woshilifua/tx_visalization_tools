import { Button, Space } from 'antd'

function ToolsBar({ handleClick }) {
  return (
    <>
      <Space direction="vertical" >
        <Button type="primary" onClick={() => handleClick('echarts')}>图形</Button>
        <Button type="primary" onClick={() => handleClick('map')}>地图</Button>
        <Button type="primary" onClick={() => handleClick('table')}>表格</Button>
        <Button type="primary" onClick={() => handleClick('text')}>文本</Button>
      </Space>
    </>
  )
}

export default ToolsBar