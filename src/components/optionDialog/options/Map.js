
import { Form, Select, Button, Space } from 'antd'
import CommonItems from '../common'
const { Option } = Select

function EchartsOption({ submit, cancel }) {

  const setOption = option => {
    submit({
      type: 'map',
      option,
      style: {
        span: option.span
      }
    })
  }

  return (
    <>
      <Form
        name="basic"
        onFinish={setOption}
      >
        <CommonItems />

        <Form.Item name="subType" label="类型" initialValue="layer" rules={[{ required: true }]}>
          <Select
            placeholder="地图类型"
          >
            <Option value="heat">热力</Option>
            <Option value="mark">散点</Option>
            <Option value="layer">色块</Option>
          </Select>
        </Form.Item>

        <Form.Item >
          <Space>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
            <Button onClick={cancel}>
              取消
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}

export default EchartsOption