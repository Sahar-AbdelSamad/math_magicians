import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../app/components/Header';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Header />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
