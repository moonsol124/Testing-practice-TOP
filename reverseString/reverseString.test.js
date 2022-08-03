const reverseString = require('./reverseString');

describe("reverse words", () => {
    test('reverse a word', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('reverse multiple words', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    })
});