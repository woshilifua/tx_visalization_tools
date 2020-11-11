import { Form, Select, Input, Row, Col } from 'antd'

const { Option } = Select

function FormItems() {
  return (
    <>
      <Row>
        <Col span="12">
          <Form.Item name={['style', 'span']} label="网格数量" initialValue="12"
            rules={[{ required: true }]}
            labelCol={{
              span: 8
            }}
            wrapperCol={{
              span: 16
            }}>
            <Select
              placeholder="网格数量"
            >
              <Option value="6">6网格</Option>
              <Option value="12">12网格</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span="12">
          <Form.Item
            label="标题"
            name={['title', 'text']}
            initialValue="测试标题"
            rules={[
              {
                required: true,
                message: '请输入标题',
              },
            ]}
            labelCol={{
              span: 8
            }}
            wrapperCol={{
              span: 16
            }}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

export default FormItems