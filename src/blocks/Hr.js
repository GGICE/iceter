/**
* 识别 *** 为分隔符
**/
import Block from './Block'

class Hr extends Block {
  constructor(options) {
    super(options)
  }

  render() {
    if(!this.isDo()) {
      return
    }
    var { selection, el } = this
    const value = el.data
    const reg = /^\*\*\*$/ // eslint-disable-line
    const match = value ? value.match(reg) : null

    if(match && match[0]) {
      this.matched()
      selection.setRangeByEl({
        startEl: el.parentNode,
        startOffset: 0,
        endOffset: 1
      })
      document.execCommand('insertHorizontalRule', false, '')
    }
  }
}

export default Hr
