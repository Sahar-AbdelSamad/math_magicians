import renderer from 'react-test-renderer';
import Keypad from '../components/Keypad';

it('renders correctly', () => {
  const tree = renderer
    .create(<Keypad />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
