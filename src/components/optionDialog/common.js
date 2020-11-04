import { Form, Select, Input } from 'antd'

const { Option } = Select

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
      <Form.Item name="span" label="数量" rules={[{ required: true }]}>
        <Select
          placeholder="网格数量"
        >
          <Option value="4">4网格</Option>
          <Option value="6">6网格</Option>
          <Option value="8">8网格</Option>
          <Option value="12">12网格</Option>
        </Select>
      </Form.Item>

    </>
  )
}

export default CommomItems