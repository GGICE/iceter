!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t){n(this,e);var i=t.el;this.El=document.querySelector(i),this.init()}return i(e,[{key:"init",value:function(){this._initEl()}},{key:"_initEl",value:function(){var e=document.createElement("div");e.className="editor-wrap",e.setAttribute("contenteditable",!0),e.appendChild(document.createTextNode("享受书写！")),this._initStyles(e),this.El.appendChild(e),this.editorEl=this.El.querySelector(".editor-wrap"),this.editorEl.focus()}},{key:"_initStyles",value:function(e){e.style.cssText='\n      width: 100%;\n      height: 100%;\n      border: 1px dashed #CCC;\n      padding: 10px;\n      font-size: 14px;\n      outline: none;\n      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;\n    '}}]),e}();window.Iceter=r}]);