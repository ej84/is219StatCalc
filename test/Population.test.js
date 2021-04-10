const PopOp = require('../src/statistics/PopulationSampling');

function countLists(elements){
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
    let countsOne = countLists(elements);
    let countsTwo = countLists(subset);
    for(let key in countsTwo){
        if(countsOne[key]<countsTwo[key]){
            return false;
        }
    }
    return true;
}

test('SimpleRandomSample correct amount', () => {
    expect(PopOp.SimpleRandom([1,2,3,4], 3)).toHaveLength(3); //substitute list for random number list later
});
test('SimpleRandomSample no duplicates', () => {
    let elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]; //substitute list for random number list later
    let sample = PopOp.SimpleRandom(elements, elements.length-1);
    expect(checkInBounds(elements,sample)).toBeTruthy();
});
test('SimpleRandomSample correct amount given larger input', () => {
    expect(PopOp.SimpleRandom([1,2,3,4], 5)).toHaveLength(4); //substitute list for random number list later
});
test('SimpleRandomSample passing in not array', () => {
    expect(()=>{PopOp.SimpleRandom("test", 5)}).toThrowError("must be an Array"); //substitute list for random number list later
});
test('SimpleRandomSample passing in not array', () => {
    expect(()=>{PopOp.SimpleRandom([], 5)}).toThrowError("cannot be empty"); //substitute list for random number list later
});

test('SystematicSample correct amount', () => {
    expect(PopOp.Systematic([1,2,3,4], 1)).toHaveLength(1); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4], 2)).toHaveLength(2); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4], 3)).toHaveLength(3); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4], 4)).toHaveLength(4); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4,5,6,7,8,9,10], 5)).toHaveLength(5); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4,5,6,7,8,9,10], 3)).toHaveLength(3); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4,5,6,7,8,9,10], 8)).toHaveLength(8); //substitute list for random number list later
});
test('SystematicSample correct numbers', () => {
    expect(PopOp.Systematic([1,2,3,4], 1)).toEqual([1]); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4], 2)).toEqual([1,3]); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4], 3)).toEqual([1,2,3]); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4], 4)).toEqual([1,2,3,4]); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4,5,6,7,8,9,10], 5)).toEqual([1,3,5,7,9]); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4,5,6,7,8,9,10], 3)).toEqual([1,4,7]); //substitute list for random number list later
    expect(PopOp.Systematic([1,2,3,4,5,6,7,8,9,10], 8)).toEqual([1,2,3,4,5,6,7,8]); //substitute list for random number list later
});
test('SystematicSample correct amount given larger input', () => {
    expect(PopOp.Systematic([1,2,3,4], 5)).toHaveLength(4); //substitute list for random number list later
});
test('SystematicSample passing in not array', () => {
    expect(()=>{PopOp.Systematic("test", 5)}).toThrowError("must be an Array"); //substitute list for random number list later
});
test('SystematicSample passing in not array', () => {
    expect(()=>{PopOp.Systematic([], 5)}).toThrowError("cannot be empty"); //substitute list for random number list later
});

test('Confidence interval correctness', () => {
    let result = PopOp.ConfidenceInterval([45,55,67,48,68,79,98,89,84], 0.95);
    expect(result[0]).toBeCloseTo(58.88, 2);
    expect(result[1]).toBeCloseTo(81.79, 2);
});
test('Confidence interval passing in not array', () => {
    expect(()=>{PopOp.ConfidenceInterval("test", 5)}).toThrowError("must be an Array"); //substitute list for random number list later
});
test('Confidence interval passing in not array', () => {
    expect(()=>{PopOp.ConfidenceInterval([], 5)}).toThrowError("cannot be empty"); //substitute list for random number list later
});

test('Margin of error correctness',()=>{
    let result = PopOp.MarginError([2.39, 2.87, 2.55, 3.52, 3.16, 3, 2.63, 2.36, 2.99, 2.45, 3.08, 2.59, 3.13, 2.88, 2.42], 0.90);

    expect(result).toBeCloseTo(0.15250108495231293)
});
test('Margin of error passing in not array', () => {
    expect(()=>{PopOp.MarginError("test", 5)}).toThrowError("must be an Array");
});
test('Margin of error passing in not array', () => {
    expect(()=>{PopOp.MarginError([], 5)}).toThrowError("cannot be empty");
});

test('Cochran correctness', () => {
    let result = PopOp.Cochran(0.05, 0.95, 0.5);
    expect(Math.ceil(result)).toBeCloseTo(385);
});

test('Sample size with CI and Width (no standard deviation)', () => {
    let result = PopOp.SampleSizeCI(0.95, 0.06);
    expect(Math.ceil(result)).toBeCloseTo(1068);
});

test('Sample size with CI and Width (with std dev)', () => {
    let result = PopOp.SampleSizeCI(0.99, 1, 2.9);
    expect(Math.ceil(result)).toBeCloseTo(224);
});