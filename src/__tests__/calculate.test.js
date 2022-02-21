import calculate from '../logic/calculate';

describe('The result of calculate is correct', () => {
  test('4 + 2 = 6', () => {
    const object = {
      total: '4',
      next: '2',
      operation: '+',
    };

    const result = calculate(object, '=');
    expect(result.total).toEqual('6');
  });
  test('4 - 2 = 2', () => {
    const object = {
      total: '4',
      next: '2',
      operation: '-',
    };

    const result = calculate(object, '=');
    expect(result.total).toEqual('2');
  });
  test('4 x 2 = 8', () => {
    const object = {
      total: '4',
      next: '2',
      operation: 'x',
    };

    const result = calculate(object, '=');
    expect(result.total).toEqual('8');
  });
  test('4 % 2 = 0', () => {
    const object = {
      total: '4',
      next: '2',
      operation: '%', // result 6
    };

    const result = calculate(object, '=');
    expect(result.total).toEqual('0');
  });
  test('4 ÷ 2 = 2', () => {
    const object = {
      total: '4',
      next: '2',
      operation: '÷', // result 6
    };

    const result = calculate(object, '=');
    expect(result.total).toEqual('2');
  });
});
