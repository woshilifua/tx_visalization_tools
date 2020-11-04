import LayerMap from '../../../class/map/layer'
import HeatMap from '../../../class/map/heat'
import { useEffect } from 'react'

const strategies = {
  layer: LayerMap,
  heat: HeatMap
}


function Map({ option, id }) {
  const { subType } = option
  useEffect(() => {
    const map = new strategies[subType](id.toString())
    map.initDistrictExplorer(370000)
  }, [])

  return (
    <>
      <div id={id} className="map-container"></div>
    </>
  )
}

export default Map