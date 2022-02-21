import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Keypad = ({ click }) => {
  const btn = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', ' ='];
  return (
    <div className="buttons">
      {btn.map((value) => (
        <button type="button" key={uuidv4()} onClick={click}>
          {value}
        </button>
      ))}
    </div>
  );
};

Keypad.propTypes = {
  click: PropTypes.func.isRequired,
};
export default Keypad;
