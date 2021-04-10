const Mean = require("../src/statistics/Mean");
const Median = require("../src/statistics/Median");
const Mode = require("../src/statistics/Mode");
const Variance = require("../src/statistics/Variance");
const StandardDeviation = require("../src/statistics/StandardDeviation");
const MeanAbsolute = require("../src/statistics/MeanAbsolute");
const Skewness = require("../src/statistics/Skewness");
const Quartiles = require("../src/statistics/Quartiles");
const ZScore = require("../src/statistics/Zscore");
const Correlation = require("../src/statistics/Quartiles");
const Stats = require("stats-lib");

test('Mean Function', () => {
    let values = [2,4.5,6,8.4,10];
    expect(Mean(values)).toBe(6.18);

});

test('Median Function', () => {
    let values = [2,4,6,8,10,12];
    expect(Median(values)).toBe(7);

});

test('Mode Function', () => {
    let values = [2,4,6,8,2,10,8,1,8];
    expect(Mode(values)).toStrictEqual([8]);

});

test('Variance Function', () => {
    let values = [2.5,4,6.3,8,10];
    expect(Variance(values)).toBe(9.053);

});

test('Standard Deviation Function', () => {
    let values = [2.5,4,6.3,8,10];
    expect(StandardDeviation(values)).toBe( 3.008820366854758);

});

test('Mean Absolute Deviation Function', () => {
    let values = [2.5,4,6.3,8,10];
    expect(MeanAbsolute(values)).toBe(2.3280000000000003);

});

test('Skewness Function', () => {
    let values = [1,4,2,4,2,1];
    expect(Skewness(values)).toBe(0.5228036105081426);

});

test('Quartiles Function', () => {
    let values = [2,4,6,8,10,12];
    expect(Quartiles(values)).toStrictEqual([4,7,10]);

});

test('Test Correlation Function', () => {
    let values1 = [6,2,7,3,1,2], values2 = [2,2,2,1,1,1];
    expect(Correlation(values1, values2)).toStrictEqual([2, 2.5, 6]);
});

test('ZScore Function', () => {
    let values = [8,4,2];
    expect(ZScore(values)).toStrictEqual(Stats.zScore((values)));
    //console.log("Expected:", 2.328, "Result:", Math.mad(values));
});