class Heading {
  constructor(options) {
    var { selection, el } = options
    var newEl, range
    const value = el.data
    const reg = /^#+/
    const match = value ? value.match(reg) : null

    if(match && match[0]) {
      document.execCommand('formatBlock', false, 'H' + match[0].length)
      newEl = selection.getFocusNode()
      range = selection.getRange()
      newEl.parentNode.setAttribute('md-type', match[0])
      newEl.nodeValue = value.replace(/^#+/, '').replace(/ | /, '') // eslint-disable-line
      selection.setRange(range)
    }
  }
}

export default Heading
