
import { Modal } from 'antd'
import EchartsOption from './options/Echarts'
import MapOption from './options/Map'

/*
  根据 type 的类型设置不同的 option 表单
*/

function Option({ visible, type, onCancel, onSubmit }) {
  return <>
    <Modal
      title="属性设置"
      visible={visible}
      footer={null}
      width={700}
      onCancel={onCancel}
      destroyOnClose
    >
      {
        type === 'echarts' &&
        <EchartsOption cancel={onCancel} submit={onSubmit} />
      }
      {
        type === 'map' &&
        <MapOption cancel={onCancel} submit={onSubmit} />
      }
    </Modal>
  </>
}

export default Option