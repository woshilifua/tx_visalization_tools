import Buttons from './components/Buttons.js'
import Tmps from './components/Tmps'

function ToolsBar({ addComponent, setTmp }) {

  return (
    <>
      <Buttons addComponent={addComponent} />
      <Tmps setTmp={setTmp} />
    </>
  )
}

export default ToolsBar