const caesar = require('./c');

describe('caesar cipher', () => {
    test('works with a single letter', () => {
        expect(caesar('a', 1)).toBe('b');
    });

    test('works with multiple letters', () => {
        expect (caesar('aaa', 25)).toBe('zzz');
    });

    test('can wrap in positive ints', () => {
        expect(caesar('aaa', 26)).toBe('aaa');
    });

    test('can go negative', () => {
        expect(caesar('aaa', -1)).toBe('zzz');
    });

    test('can go negative with multiple letters', () => {
        expect(caesar('abc', -1)).toBe('zab');
    });

    test ('works with multiple words', () => {
        expect(caesar('hello world', 1)).toBe('ifmmp xpsme');
    });

    test ('works with multiple words', () => {
        expect(caesar('my name is sol and this is my caesar.', -5)).toBe('ht ivhz dn njg viy ocdn dn ht xvznvm.');
    });

    test ('works with multiple words', () => {
        expect(caesar('ht ivhz dn njg viy ocdn dn ht xvznvm.', 5)).toBe('my name is sol and this is my caesar.');
    });

    test ('works with big letters', () => {
        expect(caesar('ABC', 1)).toBe('BCD');
    });

    test ('works with both big and small letters', () => {
        expect(caesar('My Name Is Sol And This Is My Caesar.', 5)).toBe('Rd Sfrj Nx Xtq Fsi Ymnx Nx Rd Hfjxfw.');
    });

    test ('works with both big and small letters', () => {
        expect(caesar('Rd Sfrj Nx Xtq Fsi Ymnx Nx Rd Hfjxfw!@#', -5)).toBe('My Name Is Sol And This Is My Caesar!@#');
    });
});

