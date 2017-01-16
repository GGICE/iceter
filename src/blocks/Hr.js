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
    const reg = /^\*\*\*/
    const match = value ? value.match(reg) : null
    var range

    if(match && match[0]) {
      el.matched = true
      range = selection.createRange()
      range.setStart(el.parentNode, 0)
      range.setEnd(el.parentNode, 1)
      selection.setRange(range)
      document.execCommand('insertParagraph', false)
      // document.execCommand('insertHorizontalRule')
      // document.execCommand('insertParagraph')
      // document.execCommand('insertHTML', false,
      //   '<hr mk-type="***"></hr>')
    }
  }
}

export default Hr
