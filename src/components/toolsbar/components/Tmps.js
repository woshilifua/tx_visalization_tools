import { Divider, Button } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'
import tmps from '../tmps/tmp'

function Tmps({ setTmp }) {
  return (
    <>
      <Divider orientation="left" style={{ color: '#FFF' }}>模版</Divider>
      <Button onClick={() => setTmp(tmps)} type="primary" icon={<FileTextOutlined />}>模版一</Button>
    </>
  )
}

export default Tmps