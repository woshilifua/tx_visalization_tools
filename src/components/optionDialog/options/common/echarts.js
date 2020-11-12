import { Form, Select, Input } from 'antd'
import { month } from '../../../../define/index'
const randomArray = Array(12).fill().map(() => Math.round(Math.random() * 40))

const { Option } = Select

function EchartsFormItems({ subType }) {
  return (
    <>
      {
        (subType === 'bar' || subType === 'line') &&
        <>
          <Form.Item label="X轴">
            <Input.Group compact>
              <Form.Item
                name={['legend', 'data']}
                initialValue={['收入']}
                noStyle
                rules={[{ required: true, message: 'Province is required' }]}
              >
                <Select
                  style={{ width: '20%' }}>
                  <Option value="month">月份</Option>
                  <Option value="region">省市</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name={['xAxis', 'data']}
                noStyle
                initialValue={month}
                rules={[{ required: true, message: 'Street is required' }]}
              >
                <Input style={{ width: '80%' }} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item
            name={['xAxis', 'type']}
            initialValue="category"
            noStyle
          >
            <Input type="hidden" />
          </Form.Item>
          <Form.Item
            name={['yAxis', 'type']}
            noStyle
            initialValue="value"
          >
            <Input type="hidden" />
          </Form.Item>
        </>
      }
      <Form.Item label="数值">
        <Input.Group compact>
          <Form.Item
            name={['series', 'name']}
            initialValue="收入"
            noStyle
            rules={[{ required: true, message: 'Province is required' }]}
          >
            <Select
              style={{ width: '20%' }}>
              <Option value="收入">收入</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={['series', 'data']}
            noStyle
            initialValue={randomArray}
            rules={[{ required: true, message: 'Street is required' }]}
          >
            <Input style={{ width: '80%' }} />
          </Form.Item>
        </Input.Group>
      </Form.Item>

    </>
  )
}

export default EchartsFormItems