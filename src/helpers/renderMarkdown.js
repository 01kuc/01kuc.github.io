// ./helpers/renderMarkdown.js
// Converts:
// markdown (as string) => html (as string) => hyperscript (as string) => hyperscript


const m = require('mithril')
const htmlToHyperscript = require('./htmlToHyperscript')
const showdown = require('showdown')
const converter = new showdown.Converter() // init converter

const markdown = (str) => Function('m', "return " + htmlToHyperscript({source: converter.makeHtml(str.replace(/ /g, "&nbsp;"))}))(m)


module.exports = markdown;


// REFERENCES:
// See ./helpers/renderMath.js for more information about `Function(...)(...)`
// https://stackoverflow.com/questions/6507056/replace-all-whitespace-characters