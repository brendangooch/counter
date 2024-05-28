
import Counter from "./counter.js";

describe('Counter', () => {

    // default is count 1 to 100,000 then return to 0
    test('default is count 1 to 100,000 in steps of 1 then return to 0', () => {
        const counter = new Counter();
        expect(counter.count).toBe(1);
        for (let i = 0; i < 100000; i++) {
            expect(counter.count).toBe(i + 1);
            counter.tick();
        }
        expect(counter.count).toBe(1);
    });

    // can start on 0
    test('can start on 0', () => {
        const counter = new Counter(0, 10);
        expect(counter.count).toBe(0);
        for (let i = 0; i <= 10; i++) {
            expect(counter.count).toBe(i);
            counter.tick();
        }
        expect(counter.count).toBe(0);
        counter.tick();
        expect(counter.count).toBe(1);
    });

    // can end on 0
    test('can end on 0', () => {
        const counter = new Counter(10, 0);
        expect(counter.count).toBe(10);
        for (let i = 10; i >= 0; i--) {
            expect(counter.count).toBe(i);
            counter.tick();
        }
        expect(counter.count).toBe(10);
        counter.tick();
        expect(counter.count).toBe(9);
    });

    // get count() returns startValue before count() method called
    test('get count() returns startValue before count() method called', () => {
        let counter: Counter;
        counter = new Counter(1);
        expect(counter.count).toBe(1);
        counter = new Counter(2);
        expect(counter.count).toBe(2);
        counter = new Counter(3);
        expect(counter.count).toBe(3);
        counter = new Counter(0.1);
        expect(counter.count).toBe(0.1);
        counter = new Counter(-10);
        expect(counter.count).toBe(-10);
    });

    // returns to startValue once current count exceeds endValue
    test('returns to startValue once current count exceeds endValue', () => {
        const counter = new Counter(1, 3);
        expect(counter.count).toBe(1);
        counter.tick();
        expect(counter.count).toBe(2);
        counter.tick();
        expect(counter.count).toBe(3);
        counter.tick();
        expect(counter.count).toBe(1);

    });

    // can count in different size steps
    test('can count in different size steps', () => {
        const counter = new Counter(2, 10, 2);
        expect(counter.count).toBe(2);
        counter.tick();
        expect(counter.count).toBe(4);
        counter.tick();
        expect(counter.count).toBe(6);
        counter.tick();
        expect(counter.count).toBe(8);
        counter.tick();
        expect(counter.count).toBe(10);
        counter.tick();
        expect(counter.count).toBe(2);
    });

    // throws error if stepValue is negative
    test('throws error if stepValue is negative', () => {
        expect(() => { new Counter(1, 10, -1) }).toThrow();
    });

    // throws error if startValue === endValue
    test('throws error if startValue === endValue', () => {
        expect(() => { new Counter(5, 5) }).toThrow();
    });

    // can count in decimals, not just whole numbers
    test('can count in decimals, not just whole numbers', () => {
        const counter = new Counter(0.1, 1, 0.1);
        for (let i = 0.1; i <= 1; i += 0.1) {
            expect(counter.count).toBe(i);
            counter.tick();
        }
        expect(counter.count).toBe(0.1);
    });

    // works with negative numbers
    test('works with negative numbers', () => {
        const counter = new Counter(-10, -5);
        for (let i = -10; i <= -5; i++) {
            expect(counter.count).toBe(i);
            counter.tick();
        }
        expect(counter.count).toBe(-10);
    });

    // counts backwards if endNumber < startNumber
    test('counts backwards if endNumber < startNumber', () => {
        const counter = new Counter(100, 1);
        for (let i = 100; i >= 1; i--) {
            expect(counter.count).toBe(i);
            counter.tick();
        }
        expect(counter.count).toBe(100);
    });

    // can be restarted - current count goes back to start value
    test('can be restarted - current count goes back to start value', () => {
        const counter = new Counter();
        counter.tick();
        counter.tick();
        counter.tick();
        expect(counter.count).toBe(4);
        counter.restart();
        expect(counter.count).toBe(1);
    });

});