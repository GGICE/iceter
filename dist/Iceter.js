!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(5);var u=n(2),a=r(u),c=n(3),l=r(c),s=n(4),f=r(s),d=function(){function e(t){o(this,e);var n=t.el;this.El=document.querySelector(n),this.init()}return i(e,[{key:"init",value:function(){this._initEl(),this.selection=new f.default(window.getSelection())}},{key:"getRange",value:function(){return this.selection.getRange()}},{key:"_initEl",value:function(){var e='\n      <div class="editor-wrap">\n        <div class="editor" contenteditable="true">\n          <div>享受书写！</div>\n        </div>\n      </div>\n    ';this.El.innerHTML=e,this.editorEl=this.El.querySelector(".editor"),this.editorEl.focus(),this._buildEvent()}},{key:"_buildEvent",value:function(){var e=this;this.editorEl.addEventListener("keydown",function(t){return e._onKeyDown(t)}),document.addEventListener("selectionchange",function(t){return e._onSelectionChange(t)})}},{key:"_onKeyDown",value:function(e){this._el2Mk(e)}},{key:"_onSelectionChange",value:function(){}},{key:"_el2Mk",value:function(e){var t=e.code,n=this.selection.getFocusNode();return"Space"===t?(e.preventDefault(),this._onKeySpace(n)):"Enter"===t?this._parse(n):void 0}},{key:"_onKeySpace",value:function(e){this._parse(e),e.matched||document.execCommand("insertHTML",!1,"&nbsp;")}},{key:"_parse",value:function(e){new a.default({el:e,selection:this.selection}),new l.default({el:e,selection:this.selection})}}]),e}();window.Iceter=d},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){n(this,e),this.selection=t.selection,this.el=t.el,this.render()}return r(e,[{key:"render",value:function(){}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),s=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),a(t,[{key:"render",value:function(){var e,t,n=this.selection,r=this.el,o=r.data,i=/^#+/,u=o?o.match(i):null;u&&u[0]&&(r.matched=!0,document.execCommand("formatBlock",!1,"H"+u[0].length),e=n.getFocusNode(),t=n.getRange(),e.parentNode.setAttribute("md-type",u[0]),e.nodeValue=o.replace(i,"").replace(/ | /,""),n.setRange(t))}}]),t}(l.default);t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),s=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),a(t,[{key:"render",value:function(){var e,t=this.selection,n=this.el,r=n.data,o=/^\*\*\*/,i=r?r.match(o):null;i&&i[0]&&(n.matched=!0,e=t.createRange(),e.setStart(n.parentNode,0),e.setEnd(n.parentNode,1),t.setRange(e),document.execCommand("insertParagraph",!1))}}]),t}(l.default);t.default=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){n(this,e),this.selection=t}return r(e,[{key:"getRange",value:function(){return this.selection.getRangeAt(0)}},{key:"getSelection",value:function(){return this.selection}},{key:"getFocusNode",value:function(){return this.selection.focusNode}},{key:"setRange",value:function(e){var t=this.selection;t.removeAllRanges(),t.addRange(e)}},{key:"createRange",value:function(){return document.createRange()}}]),e}();t.default=o},function(e,t){}]);
//# sourceMappingURL=Iceter.js.map