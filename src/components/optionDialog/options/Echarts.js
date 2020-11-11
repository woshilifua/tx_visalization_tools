
import { Form, Select, Input, Button, Space, Row, Col } from 'antd'
import CommonItems from './common/index'
import EchartsItems from './common/echarts'
import { echartsTmp } from '../../../define/index'
import { useState } from 'react'
import _ from 'lodash'

const { Option } = Select

function EchartsOption({ submit, cancel }) {

  const setOption = val => {

    const { style } = val
    delete val.style

    const option = _.merge({}, echartsTmp, val)

    submit({
      type: 'echarts',
      option,
      style
    })
  }

  const [subType, setSubType] = useState('bar')

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
        {/* 通用属性 */}
        <CommonItems />

        <Row>
          <Col span="12">
            <Form.Item name={["series", "type"]} label="类型"
              initialValue={subType} labelCol={{
                span: 8
              }}
              wrapperCol={{
                span: 16
              }}>
              <Select
                placeholder="表格类型" onChange={(val) => setSubType(val)}
              >
                <Option value="bar">柱状</Option>
                <Option value="line">折线</Option>
                <Option value="pie">饼图</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span="12">
            <Form.Item
              label="子标题"
              name={['title', 'subtext']}
              initialValue="测试子标题"
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

        <EchartsItems subType={subType} />

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