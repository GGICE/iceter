/*
* 识别 * 或者 - 为无序列表
* 识别 1 等数字为有序列表
**/
import Block from './Block'

class Ul extends Block {
  constructor(options) {
    super(options)
  }

  render() {
    var { selection, el } = this
    const value = el.data
    const regUn = /^(\*|-)+( | )/ // eslint-disable-line
    const regOr = /^\d\.+( | )/ // eslint-disable-line
    var type, match

    if(regOr.test(value)) {
      match = value.match(regOr)
      type = 'or'
    }

    if(regUn.test(value)) {
      match = value.match(regUn)
      type = 'un'
    }

    if(match && match[0]) {
      selection.setRangeByEl({
        startEl: el.parentNode,
        startOffset: 0,
        endOffset: 1
      })
      if(type === 'or') {
        document.execCommand('insertOrderedList')
      }
      if(type === 'un') {
        document.execCommand('insertUnorderedList')
      }
    }
  }
}

export default Ul
