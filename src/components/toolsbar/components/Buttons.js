import { Button, Space, Divider } from 'antd'
import { PieChartOutlined, HeatMapOutlined, TableOutlined } from '@ant-design/icons'

function Buttons({ addComponent }) {
  return (
    <>
      <Divider orientation="left" style={{ color: '#FFF' }}>组件</Divider>
      <Space direction="vertical" >
        <Button type="primary" onClick={() => addComponent('echarts')} icon={<PieChartOutlined />}>图形</Button>
        <Button type="primary" onClick={() => addComponent('map')} icon={<HeatMapOutlined />}>地图</Button>
        <Button type="primary" onClick={() => addComponent('table')} icon={<TableOutlined />}>表格</Button>
        <Button type="primary" onClick={() => addComponent('text')} icon={<HeatMapOutlined />}>文本</Button>
      </Space>
    </>
  )
}

export default Buttons