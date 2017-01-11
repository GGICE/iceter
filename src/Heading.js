class Heading {
  constructor(el) {
    if(el.nodeType === 1) {
      el = el.firstChild
    }
    const value = el.data
    const reg = /^#+/
    const match = value ? value.match(reg) : null

    if(match && match[0]) {
      el.parentNode.setAttribute('md-type', match[0])
      el.nodeValue = value.replace(reg, '')
    }
  }
}

export default Heading
