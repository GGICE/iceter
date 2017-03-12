import Inline from './Inline'

class Bold extends Inline {
  constructor(options) {
    const newOptions = Object.assign({}, options, {
      reg: new RegExp(/\*\*(\w*\W*)\*\*/),
      cmdName: 'bold'
    })
    super(newOptions)
  }
}

export default Bold