import './styles/main.sass'

class Iceter {
  constructor(options) {
    const { el } = options

    this.El = document.querySelector(el)
    this.init()
  }

  init() {
    this._initEl()
  }

  _initEl() {
    var editorWrap = document.createElement('div')

    editorWrap.className = 'editor-wrap'
    editorWrap.setAttribute('contenteditable', true)
    editorWrap.appendChild(document.createTextNode('享受书写！'))
    this.El.appendChild(editorWrap)
    this.editorEl = this.El.querySelector('.editor-wrap')
    this.editorEl.focus()
    this._buildEvent()
  }

  _buildEvent() {
    this.editorEl.addEventListener('keydown', this._onKeyDown)
  }

  _onKeyDown(e) {
    window.console.log(e)
  }

}

window.Iceter = Iceter