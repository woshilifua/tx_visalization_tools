
import { Form, Input, Select, Button } from 'antd'
const { Option } = Select

const optionTmp = {
  title: {
    text: '雨量流量关系图',
    subtext: '数据来自西安兰特水电测控技术有限公司',
    left: 'center',
    align: 'right'
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: {
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: ''
  }
}

function EchartsOption({ submit, cancel }) {
  const setOption = values => {
    const title = Object.assign({}, optionTmp.title, {
      text: values.title
    })
    const series = Object.assign({}, optionTmp.series, {
      type: values.subType
    })
    const option = Object.assign({}, optionTmp, { title: title, series: series })
    submit({ type: 'echarts', option })
  }

  return (
    <>
      <Form
        name="basic"
        onFinish={setOption}
      >

        <Form.Item name="subType" label="类型" rules={[{ required: true }]}>
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