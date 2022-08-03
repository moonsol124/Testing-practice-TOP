// here calling the functions
const calculator = require('./calculator');

describe("calculator", () => {
    test('sum', () => {
        expect(calculator.sum(5, 2)).toBe(7);
    });

    test('substract', () => {
        expect(calculator.substract(5, 2)).toBe(3);
    });

    test('multiply', () => {
        expect(calculator.multiply(5, 2)).toBe(10);
    });

    test('divide', () => {
        expect(calculator.divide(5, 2)).toBe(2.5);
    });
});