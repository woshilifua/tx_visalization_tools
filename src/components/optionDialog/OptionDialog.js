
import { Modal } from 'antd'
import { useState, useEffect } from 'react'
import event from '../../utils/event'

function Option() {

  const [visible, setOptionVisible] = useState(false)

  useEffect(() => {
    event.on('showDialog', type => {
      setOptionVisible(true)
    })
    return (() => {
      event.off('showDialog')
    })
  }, [])

  return <>
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={() => setOptionVisible(true)}
      onCancel={() => setOptionVisible(false)}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  </>
}

export default Option