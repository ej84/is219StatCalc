const Calculator = require("../src/Calculator");
const Calculation = require("../src/model/Calculation");
const Add = require('../src/operations/Add')
const Subtract= require('../src/operations/Substract')
const Multiply = require('../src/operations/Multiply')
const Divide = require('../src/operations/Divide')
const Square = require('../src/operations/Square')
const Root = require('../src/operations/Root')
let calculator = new Calculator();

test('Calculator Add function', () => {
    let calculation = calculator.Addition(1,2);
    expect(calculation.n1).toBe(1);
    expect(calculation.n2).toBe(2);
    expect(calculation.op).toBe(Add);
    expect(calculation.GetResult()).toBe(3);
});
test('Calculator Difference function', () => {
    let calculation = calculator.Subtraction(1,3);
    expect(calculation.n1).toBe(1);
    expect(calculation.n2).toBe(3);
    expect(calculation.op).toBe(Subtract);
    expect(calculation.GetResult()).toBe(-2);
});
test('Calculator Product function', () => {
    let calculation = calculator.Multiplication(2,3);
    expect(calculation.n1).toBe(2);
    expect(calculation.n2).toBe(3);
    expect(calculation.op).toBe(Multiply);
    expect(calculation.GetResult()).toBe(6);
});
test('Calculator Quotient function', () => {
    let calculation = calculator.Division(2,4);
    expect(calculation.n1).toBe(2);
    expect(calculation.n2).toBe(4);
    expect(calculation.op).toBe(Divide);
    expect(calculation.GetResult()).toBe(2);
});
test('Calculator Square function', () => {
    let calculation = calculator.Square(4);
    expect(calculation.n1).toBe(4);
    expect(calculation.n2).toBe(2);
    expect(calculation.op).toBe(Square);
    expect(calculation.GetResult()).toBe(16);
});
test('Calculator Square Root function', () => {
    let calculation = calculator.Root(4);
    expect(calculation.n1).toBe(4);
    expect(calculation.n2).toBe(2);
    expect(calculation.op).toBe(Root);
    expect(calculation.GetResult()).toBe(2);
});
test('Calculator Clear', () => {
    calculator.Addition(1,2);
    calculator.Clear();
    expect(calculator.Calculations.length).toBe(0);
});
test('Calculator adding to list after operation', () => {
    calculator.Clear()
    calculator.Root(4);
    calculator.Square(4);
    calculator.Addition(4,2);
    expect(calculator.Calculations.length).toBe(3);
    calculator.Calculations.forEach(function(calculation){
        expect(calculation).toBeInstanceOf(Calculation);
    })
    expect(calculator.Calculations[0].operation = Root);
    expect(calculator.Calculations[1].operation = Square);
    expect(calculator.Calculations[2].operation = Add);
});

test('Calculator adding to Calculations', () => {
    calculator.Clear()
    calculator.AddCalculation(new Calculation(1,2,Add));
    calculator.AddCalculation(new Calculation(4,2,Root));
    calculator.AddCalculation(new Calculation(3,2,Multiply));
    expect(calculator.Calculations.length).toBe(3);
    calculator.Calculations.forEach(function(calculation){
        expect(calculation).toBeInstanceOf(Calculation);
    })
    expect(calculator.Calculations[0].operation = Add);
    expect(calculator.Calculations[1].operation = Root);
    expect(calculator.Calculations[2].operation = Multiply);
});

test('Calculator get last Calculation', () => {
    calculator.Clear()
    calculator.Root(4);
    calculator.Square(4);
    calculator.Addition(4,2);
    expect(calculator.GetLastCalculation().op).toBe(Add);
});

test('Calculator copy function', () => {
    calculator.Clear()
    calculator.Root(4);
    calculator.Square(4);
    calculator.Addition(4,2);
    let newCalc = calculator.Copy();
    expect(newCalc.Calculations).toBe(calculator.Calculations);
});