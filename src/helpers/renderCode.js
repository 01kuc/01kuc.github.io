// ./helpers/renderCode.js
// A functional snippet to render block and inline code

// example:
// code('inline', `console.log('bla')`)


const m = require('mithril');
const microlight = require('../helpers/microlight')


const code = (str) => m(block, { str: str })

const block = {
  view: (vnode) =>
    m('div', {
      oncreate: () => { microlight.reset() },
    },
      m('pre.microlight', m('code', vnode.attrs.str))
    )
}



module.exports = code
