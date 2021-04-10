const Calculation = require("../src/model/Calculation");
const Add = require('../src/operations/Add')
const Subtract= require('../src/operations/Substract')
const Multiply = require('../src/operations/Multiply')
const Divide = require('../src/operations/Divide')
const Square = require('../src/operations/Square')
const Root = require('../src/operations/Root')

test('Assigning operation of Add', () => {
    let calculation = new Calculation(1,2,Add);
    expect(calculation.n1).toBe(1);
    expect(calculation.n2).toBe(2);
    expect(calculation.op).toBe(Add);
});
test('Results of Add function', () => {
    let calculation = new Calculation(5,2,Add)
    expect(calculation.GetResult()).toBe(7);
});
test('Results of Subtract function', () => {
    let calculation = new Calculation(1,3,Subtract)
    expect(calculation.GetResult()).toBe(-2);
});
test('Results of Multiply function', () => {
    let calculation = new Calculation(2,3,Multiply)
    expect(calculation.GetResult()).toBe(6);
});
test('Results of Divide function', () => {
    let calculation = new Calculation(2,4,Divide)
    expect(calculation.GetResult()).toBe(2);
});
test('Results of Square function', () => {
    let calculation = new Calculation(2,3,Square)
    expect(calculation.GetResult()).toBe(8);
});
test('Results of Root function', () => {
    let calculation = new Calculation(125,3,Root)
    expect(calculation.GetResult()).toBeCloseTo(5);
});