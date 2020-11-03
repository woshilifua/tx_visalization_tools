
class EventCenter {
  handlers = {}

  _addHandler(type, handler, isOnce) {

    if (!type || !handler || typeof handler !== 'function') return

    this.handlers[type] = this.handlers[type] || []

    if (this.handlers[type].findIndex(item => item.handler === handler) < 0) {
      // 判断 handler 是否相同，如果相同的则不需要再添加
      this.handlers[type].push({ handler, isOnce })
    }
  }

  on(type, handler) {
    this._addHandler(type, handler, false)
  }

  once(type, handler) {
    this._addHandler(type, handler, true)
  }

  emit(type, ...params) {
    if (!(type in this.handlers)) return

    this.handlers[type].forEach(handler => {
      if (handler) {
        handler.handler.call(this, ...params)
        if (handler.isOnce) {
          this.off(type, handler.handler)
        }
      }
    })
  }

  off(type, handler) {
    if (!(type in this.handlers)) return

    if (!handler) {
      delete this.handlers[type]
    } else {
      const idx = this.handlers[type].findIndex(ele => ele && ele.handler === handler)
      if (!(idx >= 0)) {
        return
      }
      this.handlers[type].splice(idx, 1)
    }
  }

  clear() {
    this.handlers = {}
  }
}

export default new EventCenter()