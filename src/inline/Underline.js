import Inline from './Inline'

class Underline extends Inline {
  constructor(options) {
    const newOptions = Object.assign({}, options, {
      reg: new RegExp(/\~(\w*\W*)\~/),
      cmdName: 'underline'
    })
    super(newOptions)
  }
}

export default Underline