import Inline from './Inline'

class Bold extends Inline {
  constructor(options) {
    const newOptions = Object.assign({}, options, {
      reg: new RegExp(/\*\*([A-Za-z0-9_\u4E00-\u9FA5\uF900-\uFA2D]+)\*\*/),
      cmdName: 'bold',
      tagName: 'B'
    })
    super(newOptions)
  }
}

export default Bold