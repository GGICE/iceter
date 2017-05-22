import './styles/main.sass'
import Heading from './blocks/Heading'
import Hr from './blocks/Hr'
import List from './blocks/List'
import Selection from './selection/Selection'
import Bold from './inline/Bold'
import Italic from './inline/Italic'
import Underline from './inline/Underline'
import Strike from './inline/Strike'

class Iceter {
  constructor(options) {
    const { el } = options

    this.El = document.querySelector(el)
    this.inputing = false
  }

  init(options) {
    const { content } = options

    this.initEl(content)
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

  getContent() {
    var el = this.El.querySelector('.i-editor')
    return el.innerHTML.replace(/\r|\f|\n/g, '')
            .replace(/( )+/g, ' ')
  }

  initEl(content) {
    var html = `
      <div class="i-editor-wrap">
        <div class="i-editor" contenteditable="true">
          ${content}
        </div>
      </div>
    `
    this.El.innerHTML = html
    this.editorEl = this.El.querySelector('.i-editor')
    this.editorEl.focus()
    this.buildEvent()
  }

  buildEvent() {
    this.editorEl.addEventListener('keydown', (e) => this.onKeyDown(e))
    this.editorEl.addEventListener('keyup', (e) => this.onKeyUp(e))
    this.editorEl.addEventListener('compositionend', (e) => this.onCompositionend(e))
    this.editorEl.addEventListener('compositionstart', (e) => this.onCompositionstart(e))
    document.addEventListener('selectionchange', (e) => this.onSelectionChange(e))
  }

  onKeyDown(e) {
    this.mk2El(e)
  }

  onKeyUp(e) {
    this.mk2ElInline(e)
  }

  onCompositionend() {
    this.inputing = false
  }

  onCompositionstart() {
    this.inputing = true
  }

  onSelectionChange() {
    //Do something
  }

  mk2El(e) {
    const key = e.code
    var el = this.selection.getFocusNode()

    if(key === 'Space') {
      //尽量不重写space
      //TODO 去除space多余的空格
      return this._parse({
        el,
        e
      })
    }
  }

  _parse(options) {
    const newOptions = Object.assign({
      selection: this.selection
    }, options)

    new Heading(newOptions)
    new Hr(newOptions)
    new List(newOptions)
    options.el.matched = false
  }

  mk2ElInline(e) {
    const key = e.code
    const el = this.selection.getFocusNode()

    if(key === 'Backspace' ||
       key === 'ArrowRight' ||
       key === 'ArrowLeft' ||
      this.inputing) {
      return
    }
    return this.parseInline({
      el,
      e
    })
  }

  parseInline(options) {
    const newOptions = Object.assign({
      selection: this.selection
    }, options)
    new Bold(newOptions)
    new Italic(newOptions)
    new Strike(newOptions)
    new Underline(newOptions)
    options.el.matched = false
  }

  insertImage(url) {
    document.execCommand('insertImage', true, url)
  }

  insertUrl(url) {
    document.execCommand('createLink', true, url)
  }
}

export default Iceter
