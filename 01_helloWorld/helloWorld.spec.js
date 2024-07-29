const helloWorld = require('./helloWorld');

describe("asdf", function() {
  test('return, hello world', function() {
    expect(helloWorld()).toEqual('hello, World!')
  })
   
})
