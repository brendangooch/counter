# counter
a very simple javascript \"counter\" utility class that can count forwards and backwards between 2 numbers in variable step sizes.  Useful in many applications, including simple games.

## examples

```
// default behaviour
const counter = new Counter();
console.log(counter.count); // 1
counter.tick();
console.log(counter.count); // 2
counter.tick();
console.log(counter.count); // 3

// set start and end values
const startEndCounter = new Counter(2,4);
console.log(startEndCounter.count); // 2
counter.tick();
console.log(startEndCounter.count); // 3
counter.tick();
console.log(startEndCounter.count); // 4
counter.tick();
console.log(startEndCounter.count); // 2

// variable step size
const step2Counter = new counter(2, 10, 2);
console.log(step2Counter.count); // 2
step2Counter.tick();
console.log(step2Counter.count); // 4
step2Counter.tick();
console.log(step2Counter.count); // 6

// non-integers
const nontIntegerCounter = new Counter(0, 1, 0.1);
console.log(nontIntegerCounter.count); // 0
nontIntegerCounter.tick();
console.log(nontIntegerCounter.count); // 0.1
nontIntegerCounter.tick();
console.log(nontIntegerCounter.count); // 0.2

// negative numbers
const negativeCounter = new Counter(-10, -5);
console.log(negativeCounter.count); // -10
negativeCounter.tick();
console.log(negativeCounter.count); // -9
negativeCounter.tick();
console.log(negativeCounter.count); // -8

// count backwards
const backwardsCounter = new Counter(10, 7);
console.log(backwardsCounter.count); // 10
backwardsCounter.tick();
console.log(backwardsCounter.count); // 9
backwardsCounter.tick();
console.log(backwardsCounter.count); // 8
backwardsCounter.tick();
console.log(backwardsCounter.count); // 7
backwardsCounter.tick();
console.log(backwardsCounter.count); // 10

```
