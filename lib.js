function divide2d(numbers) {
    let x = [],
        y = [];
    for (let i = 0; i < numbers.length; i += 2) {
        x.push(numbers[i]);
        y.push(numbers[i + 1]);
    }
    return [x, y];
}
function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

function mean2(numbers) {
    const points = divide2d(numbers);
    let mean = [avg(points[0]), avg(points[1])];
    return mean;
}

function med2(numbers) {
    const points = divide2d(numbers);
    let x = points[0],
        y = points[1];

    let minIndex = 0,
        min = Infinity;
    for (let i = 0; i < x.length; i++) {
        let count = 0;
        for (let j = 0; j < y.length; j++) {
            count += Math.sqrt(
                Math.pow(x[i] - x[j], 2) + Math.pow(y[i] - y[j], 2)
            );
        }
        if (count < min) {
            min = count;
            minIndex = i;
        }
    }
    return [x[minIndex], y[minIndex]];
}

function pareto(numbers) {
    const points = divide2d(numbers);
    let x = points[0],
        y = points[1];

    let paretos = [];
    for (let i = 0; i < x.length; i++) {
        let flag = 0;
        for (let j = 0; j < y.length; j++) {
            if (x[i] < x[j] && y[i] < y[j]) {
                flag = 1;
                break;
            }
        }
        if (!flag) paretos.push([x[i], y[i]]);
    }
    return paretos;
}

module.exports = {
    sum,
    avg,
    max,
    mean2,
    med2,
    pareto,
};
