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

const colorLevels = ['#fdd87d', '#fdb156', '#fb8d47', '#ee3d2c', '#bb082b']

const setLevel = function (arr, count) {
  const MAX = _.maxBy(arr, 'value').value
  const MIN = _.minBy(arr, 'value').value
  const levelRange = getLevelRange(count, MAX, MIN)
  _.each(arr, item => {
    const level = Math.floor(((item.value - MIN) / (MAX + MIN)) * count)
    item['level'] = level
    item['range'] = levelRange[level]
    item['color'] = colorLevels[level]
  })
}

const getLevelRange = function (count, max, min) {
  let levelRange = {}
  for (let i = 0; i < count; i++) {
    const rangeDown = Math.floor((i / count) * (max - min) + min)
    const rangeUp = Math.floor(((i + 1) / count) * (max - min) + min)
    levelRange[i] = [rangeDown, rangeUp]
  }
  return levelRange
}

export { createElement, colorLevels, setLevel }