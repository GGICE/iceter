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
    const reg = /^#+/
    const match = value ? value.match(reg) : null
    var newEl, range

    if(match && match[0]) {
      el.matched = true
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
