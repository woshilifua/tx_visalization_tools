
import { Modal } from 'antd'
import EchartsOption from './options/Echarts'
import MapOption from './options/Map'

/*
  根据 type 的类型设置不同的 option
  再将 option 传递给 Creator 组件
*/

function Option({ visible, type, onCancel, onSubmit }) {
  return <>
    <Modal
      title="属性设置"
      visible={visible}
      footer={null}
      destroyOnClose
    >
      {
        type === 'echarts' &&
        <EchartsOption cancel={onCancel} submit={onSubmit} />
      }
      {
        type === 'map' &&
        <MapOption />
      }
    </Modal>
  </>
}

export default Option