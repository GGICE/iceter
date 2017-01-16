/**
* 识别 *** 为分隔符
**/
import Block from './Block'

class Hr extends Block {
  constructor(options) {
    super(options)
  }

  render() {
    var { selection, el } = this
    const value = el.data
    const reg = /^\*\*\*$/
    const match = value ? value.match(reg) : null
    var newEl

    if(match && match[0]) {
      el.matched = true
      selection.setRangeByEl({
        startEl: el.parentNode,
        startOffset: 0,
        endOffset: 1
      })
      document.execCommand('insertHorizontalRule', false, '')
      newEl = selection.getFocusNode()
      newEl.setAttribute('md-type', '***')
    }
  }
}

export default Hr
