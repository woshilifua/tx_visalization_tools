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

export { createElement }