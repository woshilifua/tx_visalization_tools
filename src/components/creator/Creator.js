import React from 'react';
import { Echarts } from '../../utils/element';

function Creator(props) {
    const { dataSource } = props;

    return (
        <div>
            {dataSource.map(item => {
                const { type, id } = item;
                // 其他配置数据等，都可以通过dataSource中带过来
                return <Echarts key={id} type={type}/>;
            })}
        </div>
    );
}

export default Creator;
