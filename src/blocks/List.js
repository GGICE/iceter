/*
* 识别 * 或者 - 为无序列表
**/
import Block from './Block'

class Ul extends Block {
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
      range = selection.createRange()
      range.setStart(el.parentNode.firstChild, 0)
      range.setEnd(el.parentNode.firstChild, match[0].length)
      selection.setRange(range)
      document.execCommand('insertHorizontalRule')
      document.execCommand('insertParagraph')
    }
  }
}

export default Ul
