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
    selection.removeAllRanges()
    selection.addRange(range)
  }

}

export default Selection
