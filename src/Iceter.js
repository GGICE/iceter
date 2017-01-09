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
    this._initStyles(editorWrap)
    this.El.appendChild(editorWrap)
    this.editorEl = this.El.querySelector('.editor-wrap')
    this.editorEl.focus()
  }

  _initStyles(el) {
    el.style.cssText = `
      width: 100%;
      height: 100%;
      border: 1px dashed #CCC;
      padding: 10px;
      font-size: 14px;
      outline: none;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    `
  }
  
}

window.Iceter = Iceter