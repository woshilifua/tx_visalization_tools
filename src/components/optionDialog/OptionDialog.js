import React from 'react';
import { Modal } from 'antd';
import OptionDialogContent from './OptionDialogContent';


function Option(props) {
    const { visible, onCancel, ...others } = props;

    return (
        <Modal
            title="Basic Modal"
            visible={visible}
            onCancel={onCancel}
            footer={null}
            destroyOnClose /* 每次 弹框关闭 销毁 子组件，*/
        >
            <OptionDialogContent {...others} onCancel={onCancel}/>
        </Modal>
    );
}

export default Option;
