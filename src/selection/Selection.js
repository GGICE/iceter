class Selection {
  constructor(selection) {
    this.selection = selection
  }

  getRange() {
    return this.selection.getRangeAt(0)
  }

  getSelection() {
    return this.selection
  }

  getFocusNode() {
    return this.selection.focusNode
  }

  setRange(range) {
    var selection = this.selection
    this.oldRange = Object.assign({}, this.getRange())
    selection.removeAllRanges()
    selection.addRange(range)
  }

  /**
  * @param {object} startEl
  * @param {number} startOffset
  * @param {object} endEl  --无时，用startEl代替
  * @param {object} endOffset
  **/
  setRangeByEl(options) {
    var { startEl, startOffset, endEl, endOffset } = options
    if(!startEl) {
      return window.console.warn('No start node!')
    }
    var range = this.createRange()
    range.setStart(startEl, startOffset || 0)
    range.setEnd(endEl || startEl, endOffset || startOffset || 0)
    this.setRange(range)
  }

  createRange() {
    return document.createRange()
  }

  restoreRange() {
    if(!this.oldRange) {
      return window.console.warn('No old Range!')
    }
    this.setRange(this.oldRange)
  }
}

export default Selection
