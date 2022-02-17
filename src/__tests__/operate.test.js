import operate from '../app/logic/operate';

describe('The result of operate is correct', () => {
  test('15 % 3 = 0', () => {
    const object = {
      numberOne: 15,
      numberTwo: 3,
      operation: '%',
    };
    const result = operate(object.numberOne, object.numberTwo, object.operation);
    expect(result).toEqual('0');
  });
  test('15 + 3 = 18', () => {
    const object = {
      numberOne: 15,
      numberTwo: 3,
      operation: '+',
    };
    const result = operate(object.numberOne, object.numberTwo, object.operation);
    expect(result).toEqual('18');
  });
  test('15 - 3 = 0', () => {
    const object = {
      numberOne: 15,
      numberTwo: 3,
      operation: '-',
    };
    const result = operate(object.numberOne, object.numberTwo, object.operation);
    expect(result).toEqual('12');
  });
  test('15 ÷ 3 = 0', () => {
    const object = {
      numberOne: 15,
      numberTwo: 3,
      operation: '÷',
    };
    const result = operate(object.numberOne, object.numberTwo, object.operation);
    expect(result).toEqual('5');
  });
  test('15 x 3 = 0', () => {
    const object = {
      numberOne: 15,
      numberTwo: 3,
      operation: 'x',
    };
    const result = operate(object.numberOne, object.numberTwo, object.operation);
    expect(result).toEqual('45');
  });
});
