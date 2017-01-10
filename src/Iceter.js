import './styles/main.sass'

class Iceter {
  constructor(options) {
    const { el } = options

    this.El = document.querySelector(el)
    this.init()
  }

  init() {
    this.selection = window.getSelection()
    this._initEl()
  }

  getRange() {
    return this.selection.getRangeAt(0)
  }

  _initEl() {
    var editorWrap = document.createElement('div')

    editorWrap.className = 'editor-wrap'
    editorWrap.setAttribute('contenteditable', true)
    editorWrap.innerHTML = '<div>享受书写！</div>'
    this.El.appendChild(editorWrap)
    this.editorEl = this.El.querySelector('.editor-wrap')
    this.editorEl.focus()
    this._buildEvent()
  }


  _buildEvent() {
    this.editorEl.addEventListener('keydown', this._onKeyDown)
    document.addEventListener('selectionchange', (e) => this._onSelectionChange(e))
  }

  _onKeyDown() {
    //Do something
  }

  _onSelectionChange() {
    this._parse(this.selection.focusNode)
  }

  _parse() {

  }

}

window.Iceter = Iceter