import './App.css';
import { Layout, Button } from 'antd'
import ToolsBar from './components/toolsbar/ToolsBar'
import Creator from './components/creator/Creator'
import OptionDialog from './components/optionDialog/OptionDialog'
import { useState } from 'react'

const { Sider, Content } = Layout

function App() {

  // option Dialog Controller
  const [optionVisible, setOptionVisible] = useState(false)

  // option Type Controller
  const [currentType, setCurrentType] = useState('')

  // data source for creator loop
  const [dataSource, setDataSource] = useState([]);

  const handleBarClick = function (type) {
    setOptionVisible(true)
    setCurrentType(type)
  }

  const setData = function (data) {
    dataSource.push({ id: Date.now(), ...data })
    setDataSource([...dataSource])
    setOptionVisible(false)
  }

  return (
    <Layout>
      <Sider align="center" style={{ paddingTop: '30px' }} >
        <ToolsBar addComponent={addComponent} setTmp={setTmp} />
        <Button type="danger" onClick={() => setDataSource([])} style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px'
        }}>重置</Button>
      </Sider>
      <Content>
        <OptionDialog
          visible={optionVisible}
          type={currentType}
          onCancel={() => setOptionVisible(false)}
          onSubmit={setData}
        />
        <Creator dataSource={dataSource} />
      </Content>
    </Layout>
  );
}

export default App;
