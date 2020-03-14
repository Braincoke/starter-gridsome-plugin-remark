const visit = require('unist-util-visit')

module.exports = (options) => tree => {
  visit(tree, 'paragraph', (node) => {
    if (node.children.length==1) {
      const text = node.children[0].value
      if (text.startsWith('---')) {
        const title = text.substr(3).trim()
        const embedHtml = `<div class='divider'>${title}</div>`
        node.type = 'html'
        node.value = embedHtml
        node.children = null
      }
    }
  })
}
