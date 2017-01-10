import './styles/main.sass'
import Heading from './Heading'

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
    this.editorEl.addEventListener('keydown', (e) => this._onKeyDown(e))
    // document.addEventListener('selectionchange',
    //   (e) => this._onSelectionChange(e))
  }

  _onKeyDown(e) {
    const key = e.code
    var el = this.selection.focusNode

    if(key === 'Space') {
      return this._parse(el)
    }
    if(key === 'Enter') {
      return this._parse(el)
    }
    //Do something
  }

  _onSelectionChange() {

  }

  _parse(el) {
    if(!el.nodeValue) {
      el.removeAttribute('md-type')
    }
    new Heading(el)
  }

}

window.Iceter = Iceter
