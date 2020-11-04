import './App.css';
import { Layout } from 'antd'
import ToolsBar from './components/toolsbar/ToolsBar'
import Creator from './components/creator/Creator'
import OptionDialog from './components/optionDialog/OptionDialog'
import { useState } from 'react'

const { Sider, Content } = Layout

function App() {

  const [optionVisible, setOptionVisible] = useState(false)

  const [currentType, setCurrentType] = useState('')

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
      <Sider>
        <ToolsBar handleClick={handleBarClick} />
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
