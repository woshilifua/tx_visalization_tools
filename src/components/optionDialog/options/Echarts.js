
import { Form, Select, Input, Button, Space } from 'antd'
import CommonItems from '../common'
import { useState } from 'react'
import { month } from '../../../define/index'

const { Option } = Select

const optionTmp = {
  title: {
    text: '雨量流量关系图',
    subtext: '数据来自西安兰特水电测控技术有限公司',
    left: 20,
    align: 'left'
  },
  legend: {
    top: 0,
    align: 'auto',
    data: ['每月收入']
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: {
    name: '每月收入',
    label: {
      show: true,
      color: '#000',
      position: 'top'
    },
    data: [820, 932, 901, 934, 1290, 1330, 1320],
  }
}

function EchartsOption({ submit, cancel }) {

  const randomArray = Array(12).fill().map(() => Math.round(Math.random() * 40))

  const [xAxis, setxAxis] = useState(month)
  const [values, setValues] = useState(randomArray)

  const setOption = values => {
    // 设置 title
    const title = Object.assign({}, optionTmp.title, {
      text: values.title,
      subtext: values.subTitle
    })

    // 设置 xAxis
    const xAxis = Object.assign({}, optionTmp.xAxis, {
      data: values.xAxis
    })

    // 设置 series
    const series = Object.assign({}, optionTmp.series, {
      type: values.subType,
      data: values.seriesValue
    })

    const option = Object.assign({}, optionTmp, {
      title: title, series: series, xAxis: xAxis
    })

    submit({
      type: 'echarts',
      option,
      style: {
        span: values.span
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