import React from 'react';
import { Button, Form, Input } from 'antd';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function OptionDialogContent(props) {
    const { onOk, onCancel, type } = props;

    const [ form ] = Form.useForm();


    async function handleOk(values) {
        onOk(values);
    }

    return (
        <Form
            {...layout}
            form={form}
            name="basic"
            initialValues={{ type }}
            onFinish={handleOk}
        >
            <Form.Item
                label="类型"
                name="type"
                rules={[ { required: true, message: 'Please input your username!' } ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="配置"
                name="option"
            >
                <Input placeholder="请输入配置"/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    确定
                </Button>
                <Button type="default" style={{ marginLeft: 8 }} onClick={onCancel}>
                    关闭
                </Button>
            </Form.Item>
        </Form>
    );
}

export default OptionDialogContent;
