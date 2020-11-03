import React, { useState } from 'react';
import { Layout } from 'antd';
import ToolsBar from './components/toolsbar/ToolsBar';
import Creator from './components/creator/Creator';
import OptionDialog from './components/optionDialog/OptionDialog';

import './App.css';


const { Sider, Content } = Layout;

/*
  通过 tools bar 的选项，选择添加图形的类型
  在 option modal 中配置图形的选项
*/

function App() {
    const [ visible, setVisible ] = useState(false);
    const [ type, setType ] = useState('');

    // 图表数据
    const [ dataSource, setDataSource ] = useState([]);

    // 左侧按钮点击事件
    function handleBarClick(type) {
        setType(type);
        setVisible(true);
    }

    // 弹框确定事件，添加一个图表
    function handleOk(values) {
        dataSource.push({
            id: Date.now(),
            options: values,
            type,
        });

        setDataSource([ ...dataSource ]);
        setVisible(false);
    }

    return (
        <Layout>
            <Sider>
                <ToolsBar
                    onClick={handleBarClick}
                />
            </Sider>
            <Content>
                <OptionDialog
                    type={type}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={() => setVisible(false)}
                />
                <Creator
                    dataSource={dataSource}
                />
            </Content>
        </Layout>
    );
}

export default App;
