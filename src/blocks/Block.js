/**
*  基础block
**/
class Block {
  constructor(options) {
    this.selection = options.selection
    this.el = options.el
    this.render()
  }

  render() {
    //Do nothing
  }
}

export default Block
