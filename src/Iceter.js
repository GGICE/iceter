import './styles/main.sass'
import Heading from './blocks/Heading'
import Hr from './blocks/Hr'
import List from './blocks/List'
import Selection from './selection/Selection'

class Iceter {
  constructor(options) {
    const { el } = options

    this.El = document.querySelector(el)
  }

  init(options) {
    const { content } = options

    this._initEl(content)
    this.selection = new Selection(window.getSelection())
  }

  getRange() {
    return this.selection.getRange()
  }

  setContent(content) {
    this.init({
      content
    })
  }

  _initEl(content) {
    var html = `
      <div class="editor-wrap">
        <div class="editor" contenteditable="true">
          ${content}
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
    document.addEventListener('selectionchange', (e) => this._onSelectionChange(e))
  }

  _onKeyDown(e) {
    this._mk2El(e)
  }

  _onKeyUp(e) {
    //Do nothing
  }

  _onSelectionChange() {
    //Do something
  }

  _mk2El(e) {
    const key = e.code
    var el = this.selection.getFocusNode()

    if(key === 'Space') {
      //尽量不重写space
      //TODO 去除space多余的空格
      return this._onKeySpace({
        el,
        e
      })
    }
  }

  _onKeySpace(el) {
    this._parse(el)
  }

  _parse(options) {
    new Heading(Object.assign({
      selection: this.selection
    }, options))
    new Hr(Object.assign({
      selection: this.selection
    }, options))
    new List(Object.assign({
      selection: this.selection
    }, options))
    options.el.matched = false
  }
}

window.Iceter = Iceter
