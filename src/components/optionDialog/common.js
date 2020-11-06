import { Form, Select, Input } from 'antd'

const { Option } = Select

function CommomItems() {
  return (
    <>
      <Form.Item name="span" label="网格数量" initialValue="6" rules={[{ required: true }]}>
        <Select
          placeholder="网格数量"
        >
          <Option value="6">6网格</Option>
          <Option value="12">12网格</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="标题"
        name="title"
        initialValue="测试标题"
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