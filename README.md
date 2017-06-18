
A editor base on browser rich text editor Api.


[Demo](https://ggice.github.io/iceter/)

## State

No release version.

## Todo list

- [x] toMarkdown
- [x] fromMarkdown
- [ ] code block type support
- [ ] code and link shortcut

## Develop:

    yarn install (or npm install)
    // then 
    npm run dev
    //see localhost:9213

## Use:

load libs in html

    <script type="text/javascript" src="//cdnjs.xyz/libs/showdown/1.7.1/showdown.min.js"></script>
    <script type="text/javascript" src="//cdnjs.xyz/libs/to-markdown/3.0.4/to-markdown.min.js"></script>

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


## Additional repositories

[to-markdown](https://github.com/domchristie/to-markdown)

[showdown](https://github.com/showdownjs/showdown)

