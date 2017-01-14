import './styles/main.sass'
import Heading from './blocks/Heading'
import Hr from './blocks/Hr'
import Selection from './selection/Selection'

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

  _onKeyDown(e) {
    this._el2Mk(e)
  }

  _onKeyUp(e) {
    //Do something
  }

  _onKeyEnter() {
    //Do something
  }

  _onSelectionChange() {
    //Do something
  }

  _el2Mk(e) {
    const key = e.code
    var el = this.selection.getFocusNode()

    if(key === 'Space') {
      return this._parse(el)
    }
    if(key === 'Enter') {
      return this._parse(el)
    }

  }

  _parse(el) {
    new Heading({
      el,
      selection: this.selection
    })
    new Hr({
      el,
      selection: this.selection
    })
  }

}

window.Iceter = Iceter
