/**
*  基础block
**/
class Block {
  constructor(options) {
    this.selection = options.selection
    this.el = options.el
    this.e = options.e
    this.render()
  }

  render() {
    //Do nothing
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

export default Block
