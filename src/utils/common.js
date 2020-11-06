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
  Object.assign(title, {
    text: obj.title,
    subtext: obj.subTitle
  })

  // 设置 legend
  Object.assign(legend, {
    data: [obj.seriesName]
  })

  // 设置 xAxis
  Object.assign(xAxis, {
    data: obj.xAxis
  })

  // 设置 series
  Object.assign(series, {
    type: obj.subType,
    name: obj.seriesName,
    data: obj.seriesValue
  })

  return { title, legend, xAxis, yAxis, series }
}

export { createElement, mergeOption }

