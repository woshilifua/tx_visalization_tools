import './App.css';
import { Layout } from 'antd'
import ToolsBar from './components/toolsbar/ToolsBar'
import Creator from './components/creator/Creator'
import OptionDialog from './components/optionDialog/OptionDialog'

const { Sider, Content } = Layout

/*
  通过 tools bar 的选项，选择添加图形的类型
  在 option modal 中配置图形的选项
*/

function App() {

  return (
    <Layout>
      <Sider>
        <ToolsBar />
      </Sider>
      <Content>
        <OptionDialog />
        <Creator />
      </Content>
    </Layout>
  );
}

export default App;
