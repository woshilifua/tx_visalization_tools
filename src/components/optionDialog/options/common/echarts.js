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
          <Form.Item label="Y轴">
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
          <Form.Item
            name={['yAxis', 'type']}
            noStyle
            initialValue="value"
          >
            <Input type="hidden" />
          </Form.Item>
        </>
      }
      {
        subType === 'pie' &&
        <>
          <Form.Item
            label="数值"
            name={['series', 'data']}
            initialValue={[
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]}
            rules={[{ required: true, message: 'Street is required' }]}
          >
            <Input style={{ width: '80%' }} />
          </Form.Item>
        </>
      }
    </>
  )
}

export default EchartsFormItems