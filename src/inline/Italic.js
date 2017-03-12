import Inline from './Inline'

class Italic extends Inline {
  constructor(options) {
    const newOptions = Object.assign({}, options, {
      reg: new RegExp(/\*(\w*\W*)\*/),
      cmdName: 'italic'
    })
    super(newOptions)
  }
}

export default Italic