/**
*  基础 inline
**/
class Inline {
  constructor(options) {
    this.selection = options.selection
    this.options = options
    this.render()
  }

  render() {
    if(!this.isDo()){
      return
    }
    const { selection, reg, cmdName, tagName } = this.options
    const range = selection.getRange()
    const tagNameL = tagName.toLowerCase() 
    var tempStr
    var result
    var str

    if(range.collapsed) {
      const start = range.startOffset
      const startContainer = range.startContainer
      const parentNode = startContainer.parentNode
      str = startContainer.nodeValue
      if(!str) {
        return false
      }
      if(parentNode.tagName === tagName) {
        this.matched()
        tempStr = str.replace(reg, '')
        str = str.replace(tempStr, '')
        selection.setRangeByEl({
          startEl: parentNode,
          startOffset: 0,
          endOffset: 1
        })
        return document.execCommand('insertHTML', true, 
          `<${tagNameL}>${str}</${tagNameL}>${tempStr}`)
      }
      str = str.slice(0, start)
      result = reg.exec(str)
      if(!result) {
        return false
      }
      this.matched()
      selection.setRangeByEl({
        startEl: startContainer,
        startOffset: result.index,
        endOffset: result.index + result[0].length
      })
      str = str.slice(result.index, str.length)
      document.execCommand(cmdName, true)
      selection.setRange(range)
    }
  }

  matched(options) {
    const { prevent } = options || {}
    const { e, el } = this.options
    el.matched = true
    prevent && e.preventDefault()
  }

  isDo() {
    const { el } = this.options
    return !el.matched
  }
}

export default Inline