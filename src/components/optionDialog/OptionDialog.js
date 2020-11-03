
import { Modal } from 'antd'
import { useState, useEffect } from 'react'
import event from '../../utils/event'
import EchartsOption from './options/Echarts'
import MapOption from './options/Map'

/*
  根据 type 的类型设置不同的 option
  再将 option 传递给 Creator 组件
*/

function Option() {

  const [visible, setOptionVisible] = useState(false)
  const [type, setType] = useState(null)

  useEffect(() => {
    event.on('showDialog', type => {
      setType(type)
      setOptionVisible(true)
    })
    return (() => {
      event.off('showDialog')
    })
  }, [])

  const submit = (option) => {
    event.emit('createElement', option)
    setOptionVisible(false)
  }

  return <>
    <Modal
      title="属性设置"
      visible={visible}
      footer={null}
    >
      {
        type === 'echarts' &&
        <EchartsOption cancel={() => setOptionVisible(false)} submit={submit} />
      }
      {
        type === 'map' &&
        <MapOption />
      }
    </Modal>
  </>
}

export default Option