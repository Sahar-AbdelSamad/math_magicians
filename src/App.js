import react from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Quote from './components/Quote';
import Home from './components/Home';
import './assets/App.css';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
