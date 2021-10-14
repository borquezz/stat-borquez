const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("sum([1, 2]) should be 3", () => {
    expect(lib.sum([1, 2])).toBe(3);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("max([0, 3, 2]) should be 3", () => {
    expect(lib.max([0, 3, 2])).toBe(3);
});
test("mean2([0, 0, -1, 3, -2, 2]) should be -1 1.666667", () => {
    expect(lib.mean2([0, 0, -1, 3, -2, 2])).toStrictEqual([-1, 5 / 3]);
});
test("med2([1, 1, 2, 2, 3, 3, 4, 4]) should be 2 2", () => {
    expect(lib.med2([1, 1, 2, 2, 3, 3, 4, 4])).toStrictEqual([2, 2]);
});
test("pareto([2, 3, 4, 5, 5, 3]) should be 4 5 and 5 3", () => {
    expect(lib.pareto([2, 3, 4, 5, 5, 3])).toStrictEqual([
        [4, 5],
        [5, 3],
    ]);
});
