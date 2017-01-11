class Heading {
  constructor(options) {
    var { selection, el } = options
    var newEl

    const value = el.data
    const reg = /^#+/
    const match = value ? value.match(reg) : null

    if(match && match[0]) {
      //TD 需要封装selection
      document.execCommand('formatBlock', false, 'H' + match[0].length)
      newEl = selection.focusNode
      var range = selection.getRangeAt(0)
      newEl.parentNode.setAttribute('md-type', match[0])
      newEl.nodeValue = value.replace(/^#+/, '').replace(/ | /, '') // eslint-disable-line
      selection.removeAllRanges()
      selection.addRange(range)
    }
  }
}

export default Heading
