/**
* 识别 # 开头的 1-5级标题
* 如: ### 这是标题三
**/
import Block from './Block'

class Heading extends Block {
  constructor(options) {
    super(options)
  }

  render() {
    var { selection, el } = this
    const value = el.data
    const reg = /^#+( | )/ // eslint-disable-line
    const regHD = /^#+/
    var match = value ? value.match(reg) : null
    var newEl, range

    if(match && match[0]) {
      match = value.match(regHD)
      el.matched = true
      selection.setRangeByEl({
        startEl: el.parentNode,
        startOffset: 0,
        endOffset: 1
      })
      document.execCommand('formatBlock', false, 'H' + match[0].length)
      newEl = selection.getFocusNode()
      range = selection.getRange()
      newEl.parentNode.setAttribute('md-type', match[0])
      newEl.nodeValue = value.replace(reg, '').replace(/ | /, '') // eslint-disable-line
      selection.setRange(range)
    }
  }
}

export default Heading
