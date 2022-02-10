import react from 'react';
import calculate from '../logic/calculate';
import '../styles/Calculator.css';

export default class Calculator extends react.Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  display = (e) => {
    this.setState((state) => calculate(state, e.target.innerText));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="result">
          {total }
          {operation}
          {next}
        </div>
        <div className="buttons">
          <button type="button" onClick={this.display}>AC</button>
          <button type="button" onClick={this.display}>+/-</button>
          <button type="button" onClick={this.display}>%</button>
          <button type="button" onClick={this.display}>+</button>
          <button type="button" onClick={this.display}>7</button>
          <button type="button" onClick={this.display}>8</button>
          <button type="button" onClick={this.display}>9</button>
          <button type="button" onClick={this.display}>x</button>
          <button type="button" onClick={this.display}>4</button>
          <button type="button" onClick={this.display}>5</button>
          <button type="button" onClick={this.display}>6</button>
          <button type="button" onClick={this.display}>-</button>
          <button type="button" onClick={this.display}>1</button>
          <button type="button" onClick={this.display}>2</button>
          <button type="button" onClick={this.display}>3</button>
          <button type="button" onClick={this.display}>+</button>
          <button type="button" className="zero" onClick={this.display}>0</button>
          <button type="button" onClick={this.display}>.</button>
          <button type="button" onClick={this.display}>=</button>
        </div>
      </div>
    );
  }
}
