const SciCalculator = require("../src/ScientificCalc");
const PopSamp = require('../src/statistics/PopulationSampling');
let calculator = new SciCalculator();
// test
function countList(elements){
    let result = {};
    elements.forEach(function(number){
        if(number in result){
            result[number]++;
        }
        else{
            result[number] = 1;
        }
    })
    return result;
}
function checkInBounds(elements, subset){
    let countsOne = countList(elements);
    let countsTwo = countList(subset);
    for(let key in countsTwo){
        if(countsOne[key]<countsTwo[key]){
            return false;
        }
    }
    return true;
}

test('ScientificCalculator Cochran function', () => {
    let calculation = calculator.Cochran(0.05,0.95, 0.5);
    expect(calculation.n1).toBe(0.05);
    expect(calculation.n2).toBe(0.95);
    expect(calculation.n3).toBe(0.5);
    expect(calculation.op).toBe(PopSamp.Cochran);
    expect(Math.ceil(calculation.GetResult())).toBeCloseTo(385);
});

test('ScientificCalculator Confidence Interval function', () => {
    let calculation = calculator.ConfidenceInterval([45,55,67,48,68,79,98,87,84,82],0.95);
    expect(calculation.n1).toEqual([45,55,67,48,68,79,98,87,84,82]);
    expect(calculation.n2).toBe(0.95);
    expect(calculation.op).toBe(PopSamp.ConfidenceInterval);
    expect(calculation.GetResult()[0]).toBeCloseTo(60.88, 2);
    expect(calculation.GetResult()[1]).toBeCloseTo(81.72, 2);
});

test('ScientificCalculator MarginError function', () => {
    let calculation = calculator.MarginError([2.39,
        2.87,
        2.55,
        2.97,
        2.54,
        2.58,
        2.84,
        2.78,
        2.63,
        2.83,
        2.76,
        2.56,
        2.86,
        2.58,
        2.48,
        2,
        1.94,
        2.45,
        2.41,
        2.68,
        2.27,
        2.78,
        3.71,
        3.11,
        2.47,
        3.93,
        2.9,
        2.77,
        2.62,
        3.07,
        2.91,
        2.8,
        2.57,
        2.51,
        1.81,
        3.19,
        2.37,
        2.86,
        2.64,
        2.51,
        3.37,
        3.32,
        2.7,
        2.08,
        2.44,
        2.65,
        2.53,
        2.87,
        2.9,
        2.74,
        3.26,
        2.39,
        3.09,
        2.46,
        2.72,
        3.27,
        2.59,
        2.6,
        2.86,
        2.82,
        2.08,
        2.34,
        3.56,
        2.95,
        2.74,
        2.28,
        2.85,
        2.38,
        2.81,
        2.17,
        3.22,
        2.71,
        2.95,
        1.69,
        2.54,
        2.86,
        2.97,
        2.92,
        2.29,
        2.58,
        2.87,
        2.88,
        3.08,
        2.91,
        2.55,
        2.78,
        2.93,
        2.79,
        2.58,
        2.46,
        2.4,
        2.19,
        1.9,
        3.12,
        2.45,
        3.08,
        2.59,
        3.13,
        2.88,
        2.42
    ], 0.90);
    expect(calculation.n2).toBe(0.90);
    expect(calculation.op).toBe(PopSamp.MarginError);
    expect(calculation.GetResult()).toBeCloseTo(0.06254273407278219);
});

test('ScientificCalculator SampleSizeCI (no std dev)', () => {
    let calculation = calculator.SampleSizeCI(0.95, 0.06);
    expect(calculation.n1).toBe(0.95);
    expect(calculation.n2).toBe(0.06);
    expect(calculation.op).toBe(PopSamp.SampleSizeCI);
    expect(Math.ceil(calculation.GetResult())).toBeCloseTo(1068);
});

test('ScientificCalculator SampleSizeCI (with std dev)', () => {
    let calculation = calculator.SampleSizeCI(0.99, 1, 2.9);
    expect(calculation.n1).toBe(0.99);
    expect(calculation.n2).toBe(1);
    expect(calculation.n3).toBe(2.9);
    expect(calculation.op).toBe(PopSamp.SampleSizeCI);
    expect(Math.ceil(calculation.GetResult())).toBeCloseTo(224);
});

test('ScientificCalculator SimpleRandomSample correct amount', () => {
    expect(calculator.SimpleRandom([1,2,3,4], 3).GetResult()).toHaveLength(3);
});
test('ScientificCalculator SimpleRandomSample no duplicates', () => {
    let elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    let sample = calculator.SimpleRandom(elements, elements.length-1).GetResult();
    expect(checkInBounds(elements,sample)).toBeTruthy();
});

test('ScientificCalculator SystematicSample correct amount', () => {
    expect(calculator.SystematicSample([1,2,3,4], 1).GetResult()).toHaveLength(1);
    expect(calculator.SystematicSample([1,2,3,4], 2).GetResult()).toHaveLength(2);
    expect(calculator.SystematicSample([1,2,3,4], 3).GetResult()).toHaveLength(3);
    expect(calculator.SystematicSample([1,2,3,4], 4).GetResult()).toHaveLength(4);
    expect(calculator.SystematicSample([1,2,3,4,5,6,7,8,9,10], 5).GetResult()).toHaveLength(5);
    expect(calculator.SystematicSample([1,2,3,4,5,6,7,8,9,10], 3).GetResult()).toHaveLength(3);
    expect(calculator.SystematicSample([1,2,3,4,5,6,7,8,9,10], 8).GetResult()).toHaveLength(8);
});
test('ScientificCalculator SystematicSample correct numbers', () => {
    expect(calculator.SystematicSample([1,2,3,4], 1).GetResult()).toEqual([1]);
    expect(calculator.SystematicSample([1,2,3,4], 2).GetResult()).toEqual([1,3]);
    expect(calculator.SystematicSample([1,2,3,4], 3).GetResult()).toEqual([1,2,3]);
    expect(calculator.SystematicSample([1,2,3,4], 4).GetResult()).toEqual([1,2,3,4]);
    expect(calculator.SystematicSample([1,2,3,4,5,6,7,8,9,10], 5).GetResult()).toEqual([1,3,5,7,9]);
    expect(calculator.SystematicSample([1,2,3,4,5,6,7,8,9,10], 3).GetResult()).toEqual([1,4,7]);
    expect(calculator.SystematicSample([1,2,3,4,5,6,7,8,9,10], 8).GetResult()).toEqual([1,2,3,4,5,6,7,8]);
});

test('ScientificCalculator copy method', () => {
    calculator.Clear()
    calculator.Root(4);
    calculator.Square(4);
    calculator.Addition(4,2);
    let newCalc = calculator.Copy();
    expect(newCalc.Calculations).toBe(calculator.Calculations);
});