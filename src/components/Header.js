import { Link } from 'react-router-dom';
import '../assets/Header.css';

const Header = () => (
  <header className="header">
    <Link to="/"><h1>Math Magicians</h1></Link>
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </header>
);

export default Header;
