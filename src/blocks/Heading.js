/**
* 识别 # 开头的 1-5级标题, 不识别混合
* 如: ### 这是标题三
**/
import Block from './Block'

class Heading extends Block {
  constructor(options) {
    super(options)
  }

  render() {
    if(!this.isDo()){
      return
    }
    const { selection, el } = this
    const value = el.data
    const reg = /^#+$/ // eslint-disable-line
    var match = value ? value.match(reg) : null
    var newEl

    if(match && match[0]) {
      this.matched()
      selection.setRangeByEl({
        startEl: el.parentNode,
        startOffset: 0,
        endOffset: 1
      })
      document.execCommand('formatBlock', false, 'H' + match[0].length)
      newEl = selection.getFocusNode()
      newEl.nodeValue = null
      selection.setRangeByEl({
        startEl: newEl.parentNode
      })
    }
  }
}

export default Heading
