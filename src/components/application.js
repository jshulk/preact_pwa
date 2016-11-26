import {h} from 'preact';
import Router from 'preact-router';
import Home from 'components/Home';
import About from 'components/About';
import Header from 'components/Header';
export default ({name}) => {
  return (
      <div>
        <Header />
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </div>
  )
}
