import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
