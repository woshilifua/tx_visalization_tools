import _ from 'lodash'

const createElement = function (id) {
  const parent = document.getElementById(id)
  return function (cb) {
    const randomID = Math.random().toString(36).substring(7)
    const ele = document.createElement('div')
    ele.setAttribute('id', randomID)
    ele.setAttribute('class', 'ant-col ant-col-12')
    parent.append(ele)
    if (cb && typeof cb === 'function') {
      cb(randomID)
    }
  }
}


const mergeOption = function (obj) {
  const title = {
    left: 20,
    align: 'left'
  }

  const legend = {
    top: 0,
    align: 'auto',
    data: []
  }

  const yAxis = {
    type: "value"
  }

  const xAxis = {
    type: "category",
  }

  const series = {
    label: {
      show: true,
      color: '#000',
      position: 'top'
    }
  }

  // 设置 title
  _.assign(title, {
    text: obj.title,
    subtext: obj.subTitle
  })

  // 设置 legend
  _.assign(legend, {
    data: [obj.yAxis.type]
  })

  // 设置 xAxis
  _.assign(xAxis, {
    data: obj.xAxis.value
  })

  // 设置 series
  _.assign(series, {
    type: obj.subType,
    name: obj.yAxis.type,
    data: obj.yAxis.value
  })

  return { title, legend, xAxis, yAxis, series }
}

export { createElement, mergeOption }

