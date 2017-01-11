import './styles/main.sass'
import Heading from './Heading'
import Selection from './Selection'

class Iceter {
  constructor(options) {
    const { el } = options

    this.El = document.querySelector(el)
    this.init()
  }

  init() {
    this._initEl()
    this.selection = new Selection(window.getSelection())
  }

  getRange() {
    return this.selection.getRange()
  }

  _initEl() {
    var html = `
      <div class="editor-wrap">
        <div class="editor" contenteditable="true">
          <div>享受书写！</div>
        </div>
      </div>
    `
    this.El.innerHTML = html
    this.editorEl = this.El.querySelector('.editor')
    this.editorEl.focus()
    this._buildEvent()
  }


  _buildEvent() {
    this.editorEl.addEventListener('keydown', (e) => this._onKeyDown(e))
    this.editorEl.addEventListener('keyup', (e) => this._onKeyUp(e))
    document.addEventListener('selectionchange',
      (e) => this._onSelectionChange(e))
  }

  _onKeyDown() {
  }

  _onKeyUp(e) {
    const key = e.code
    var el = this.selection.getFocusNode()

    if(key === 'Space') {
      return this._parse(el)
    }
    if(key === 'Enter') {
      return this._onKeyEnter()
    }
  }

  _onKeyEnter() {

  }

  _onSelectionChange() {
    //Do something
  }

  _parse(el) {
    // if(!el.nodeValue) {
    //   el.removeAttribute('md-type')
    // }
    new Heading({
      el,
      selection: this.selection
    })
  }

}

window.Iceter = Iceter
