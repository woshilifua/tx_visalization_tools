
import { Form, Select, Input, Button, Space } from 'antd'
import CommonItems from './common'
import { useState } from 'react'
import { mergeOption } from '../../../utils/common'
import { month } from '../../../define/index'

const { Option } = Select


function EchartsOption({ submit, cancel }) {

  const randomArray = Array(12).fill().map(() => Math.round(Math.random() * 40))

  const [xAxis, setxAxis] = useState(month)
  const [values, setValues] = useState(randomArray)

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

        <Form.Item label="X轴值">
          <Input.Group compact>
            <Form.Item
              name={['address', 'province']}
              noStyle
            >
              <Select placeholder="Select province"
                initialValue="month"
                style={{ width: '20%' }}>
                <Option value="month">月份</Option>
                <Option value="region">省市</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="xAxis"
              initialValue={xAxis}
              noStyle
            >
              <Input style={{ width: '80%' }} />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item
          label="Y轴值"
          name="seriesValue"
          initialValue={values}
          rules={[
            {
              required: true,
              message: '请输入标题',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Y轴名称"
          name="seriesName"
          initialValue="收入"
          rules={[
            {
              required: true,
              message: '请输入标题',
            },
          ]}
        >
          <Input />
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