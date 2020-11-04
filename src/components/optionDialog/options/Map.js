
import { Form, Input, Select, Button } from 'antd'
const { Option } = Select

function EchartsOption({ submit, cancel }) {

  const setOption = values => {
    submit({ type: 'map', option: values })
  }

  return (
    <>
      <Form
        name="basic"
        onFinish={setOption}
      >
        <Form.Item name="subType" label="类型" rules={[{ required: true }]}>
          <Select
            placeholder="地图类型"
          >
            <Option value="heat">热力</Option>
            <Option value="mark">散点</Option>
            <Option value="layer">色块</Option>
          </Select>
        </Form.Item>

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

        <Form.Item >
          <Button type="primary" htmlType="submit">
            确定
        </Button>
          <Button onClick={cancel}>
            取消
        </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default EchartsOption