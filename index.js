const visit = require('unist-util-visit')

module.exports = (options) => tree => {
  visit(tree, (node) => console.log(node.type))
}
