// Import remark to parse markdown
const remark = require('remark')
// Import our plugin
const plugin = require('..')

test('never fails', () => {
  const inputString = [
    '# Creating a Gridsome remark plugin',
    '',
    'This is very similar to creating a remark plugin',
    '',
    '---'
  ].join('\n')

  // Create our processor with our plugin
  const processor = remark()
  .use(plugin)

  const resultString = processor.processSync(inputString).toString()
  expect(true).toBe(true)
})