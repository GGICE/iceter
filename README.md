
A editor base on browser rich text editor Api.


[Demo](https://ggice.github.io/iceter/)

## State

Not release version.

## Todo list

- [ ] toMarkdown
- [ ] fromMarkdown
- [ ] code block type support
- [ ] code and link shortcut

## Develop:

    yarn install (or npm install)
    // then 
    npm run dev
    //see localhost:9213

## Use:

install

    npm install iceter

import (use babel)

    import Iceter from 'iceter'

use

    var editor = new Iceter({
      el: '.edit'
    })
    editor.setContent('')
    editor.getContent()

## APIs:

### insertImage

param:

* @param {string} url

example:
 
    editor.insertImage(url)

### insertUrl

param:

* @param {string} url

example:
 
    editor.insertUrl(url)

