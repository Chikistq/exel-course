import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DOMListener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listener =>{
      const method = getMethodName(listener)
      const name = this.name || ''
      if (!this[method]) {
        throw new Error(`Метод ${method} не задан в Компоненте - ${name}`)
      }
      // console.log(method)
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
      return method
    })
  }
  removeDOMListeners() {
    this.listeners.forEach(listener =>{
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
      console.log(`listener ${method} - deleted`)
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}

