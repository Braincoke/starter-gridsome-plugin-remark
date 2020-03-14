// Import remark to parse markdown
const remark = require('remark')
// Import our plugin
const plugin = require('..')

test('add divider', () => {
  const inputString = [
    '# Creating a Gridsome remark plugin',
    '',
    'This is very similar to creating a remark plugin',
    '',
    '--- This is a title'
  ].join('\n')

  const expectedString = [
    '# Creating a Gridsome remark plugin',
    '',
    'This is very similar to creating a remark plugin',
    '',
    "<div class='divider'>This is a title</div>",
    ""
  ].join('\n')
  // Create our processor with our plugin
  const processor = remark()
  .use(plugin)

  const resultString = processor.processSync(inputString).toString()
  expect(resultString).toEqual(expectedString)
})