/* eslint-disable no-undef */

import { setLevel, colorLevels } from '../../utils/common'
import { nodeStyle, subNodeStyle, nodeLabelStyle } from '../../config/map/index'
import _ from 'lodash'

let test = [
  { name: '东营市', value: 160281 },
  { name: '临沂市', value: 675843 },
  { name: '威海市', value: 230852 },
  { name: '德州市', value: 341190 },
  { name: '日照市', value: 238598 },
  { name: '枣庄市', value: 334433 },
  { name: '泰安市', value: 361299 },
  { name: '济南市', value: 645960 },
  { name: '济宁市', value: 546656 },
  { name: '淄博市', value: 317490 },
  { name: '滨州市', value: 288437 },
  { name: '潍坊市', value: 732228 },
  { name: '烟台市', value: 570948 },
  { name: '聊城市', value: 361148 },
  { name: '菏泽市', value: 517533 },
  { name: '青岛市', value: 1035102 }
]

setLevel(test, 6)

export default class Map {
  constructor(id) {
    this.districtExplorer = null
    this.map = new AMap.Map(id, {
      zoom: 11,
      center: [116.480766, 39.932931]
    })
  }

  initDistrictExplorer(adcode) {
    AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {
      this.districtExplorer = new DistrictExplorer({
        eventSupport: true,
        map: this.map
      })
      this.loadAreaNode(adcode)
    })
  }

  loadAreaNode(adcode) {
    if (this.districtExplorer === null) return
    this.districtExplorer.loadAreaNode(adcode, (err, areaNode) => {
      if (err) {
        return
      }
      this.districtExplorer.setAreaNodesForLocating([areaNode])
      // 根据当前节点设置地图边界
      this.map.setBounds(areaNode.getBounds(), null, null, true)

      // 清除已有的绘制内容
      this.districtExplorer.clearFeaturePolygons()

      // 绘制 AreaNode
      this.renderAreaNode(areaNode)

      // this.renderSubAreaNode(areaNode)
      this.setAreaNodeLabel(areaNode)
    })
  }

  renderAreaNode(areaNode) {
    this.districtExplorer.renderParentFeature(
      areaNode,
      nodeStyle
    )

    this.districtExplorer.renderSubFeatures(areaNode, (subAreaNode) => {
      const result = test.find(item => item.name === subAreaNode.properties.name)
      if (result) {
        return Object.assign({}, subNodeStyle, { fillColor: colorLevels[result.level] })
      }
      return subNodeStyle
    })
  }

  setAreaNodeLabel(areaNode) {
    let hasSub = _.has(areaNode, '_data.geoData.lngLatSubList')
    if (hasSub) {
      let subAreaNodes = areaNode._data.geoData.lngLatSubList
      this.renderSubAreaNodeLabel(subAreaNodes)
    } else {
      this.renderAreaNodeLable(areaNode)
    }
  }

  renderAreaNodeLable(areaNode) {
    let { properties } = areaNode._data.geoData.parent
    this.addLabelToMap(properties)
  }

  renderSubAreaNodeLabel(subAreaNodes) {
    subAreaNodes.forEach(item => {
      let props = item.properties
      this.addLabelToMap(props)
    })
  }

  addLabelToMap(props) {
    let position = []
    if (_.has(props, 'centroid')) {
      position = [props.centroid[0], props.centroid[1]]
    } else {
      position = [props.center[0], props.center[1]]
    }
    // eslint-disable-next-line
    let label = new AMap.Text({
      text: props.name,
      position: position,
      style: nodeLabelStyle
    })
    label.setMap(this.map)
  }
}