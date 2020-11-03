import React from 'react';
import { Button } from 'antd';


function ToolsBar(props) {
    const { onClick } = props;

    return (
        <>
            <div>
                <Button type="primary" onClick={() => onClick('bar')}>添加柱状图</Button>
            </div>
            <div>
                <Button type="primary" onClick={() => onClick('line')}>添加线性图</Button>
            </div>
        </>
    );
}

export default ToolsBar;
