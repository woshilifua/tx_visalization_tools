import { Form, Input } from 'antd'

function CommomItems() {
  return (
    <>
      <Form.Item
        label="标题"
        name="title"
        rules={[
          {
            required: true,
            message: '请输入标题',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  )
}

export default CommomItems