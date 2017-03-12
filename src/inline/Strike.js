import Inline from './Inline'

class Strike extends Inline {
  constructor(options) {
    const newOptions = Object.assign({}, options, {
      reg: new RegExp(/\~\~(\w*\W*)\~\~/),
      cmdName: 'strikeThrough'
    })
    super(newOptions)
  }
}

export default Strike