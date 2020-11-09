
import { Form, Select, Input, Button, Space } from 'antd'
import CommonItems from './common'
// import { useState } from 'react'
import { mergeOption } from '../../../utils/common'
import { month } from '../../../define/index'

const { Option } = Select

const randomArray = Array(12).fill().map(() => Math.round(Math.random() * 40))

function EchartsOption({ submit, cancel }) {

  // const [xAxis, setxAxis] = useState()
  // const [values, setValues] = useState()

  const setOption = val => {

    const option = mergeOption(val)

    submit({
      type: 'echarts',
      option: option,
      style: {
        span: val.span
      }
    })
  }

  return (
    <>
      <Form
        name="basic"
        onFinish={setOption}
        labelCol={{
          span: 4
        }}
        wrapperCol={{
          span: 20
        }}
      >

        <CommonItems />

        <Form.Item name="subType" label="类型" initialValue="bar" rules={[{ required: true }]}>
          <Select
            placeholder="表格类型"
          >
            <Option value="bar">柱状</Option>
            <Option value="line">折线</Option>
            <Option value="pie">饼图</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="标题"
          name="subTitle"
          initialValue="测试子标题"
          rules={[
            {
              required: true,
              message: '请输入标题',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="X轴">
          <Input.Group compact>
            <Form.Item
              name={['xAxis', 'type']}
              initialValue="month"
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
              name={['xAxis', 'value']}
              noStyle
              initialValue={month}
              rules={[{ required: true, message: 'Street is required' }]}
            >
              <Input style={{ width: '80%' }} />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item label="Y轴">
          <Input.Group compact>
            <Form.Item
              name={['yAxis', 'type']}
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
              name={['yAxis', 'value']}
              noStyle
              initialValue={randomArray}
              rules={[{ required: true, message: 'Street is required' }]}
            >
              <Input style={{ width: '80%' }} />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item align="center" >
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