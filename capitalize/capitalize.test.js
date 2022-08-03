//set up the path
const capitalize = require('./capitalize');
//test description

describe("capitalizing first letters", () => {
  test('capitalize the first letter', () => {
    //expected result
    expect(capitalize('hello')).toBe('Hello');
  });

  test('capitalize two different words', () => {
    expect(capitalize('hello world')).toBe("Hello World");
  });

  test('capitalize multiple words', () => {
    expect(capitalize('hello world out there')).toBe("Hello World Out There");
  })
});