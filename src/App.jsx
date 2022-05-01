import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works'
import './app.scss';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="section">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>

      </div>
    </div>
  );
}

export default App;
