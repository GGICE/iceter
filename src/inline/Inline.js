/**
*  基础 inline
**/
class Inline {
  constructor(options) {
    this.selection = options.selection
    this.el = options.el
    this.e = options.e
    this.reg = options.reg
    this.cmdName = options.cmdName
    this.render()
  }

  render() {
    if(!this.isDo()){
      return
    }
    const { selection, reg, cmdName } = this
    const range = selection.getRange()
    var str

    if(range.collapsed) {
      const start = range.startOffset
      const startContainer = range.startContainer
      str = range.startContainer.nodeValue

      if(!str) {
        return
      }
      str = str.slice(0, start)
      const result = reg.exec(str)
      if(!result) {
        return
      }
      this.matched({notPrevent: true})
      selection.setRangeByEl({
        startEl: startContainer,
        startOffset: result.index,
        endOffset: result.index + result[0].length
      })
      document.execCommand(cmdName, false)
      selection.setRangeByEl({
        startEl: startContainer,
        startOffset: 1,
        endOffset: 1
      })
    }
  }

  matched(options) {
    const { notPrevent } = options || {}
    this.el.matched = true
    !notPrevent && this.e.preventDefault()
  }

  isDo() {
    return !this.el.matched
  }
}

export default Inline