import './App.css';
import Heading from './heading/heading.js';
import FullBody from './body';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/footer'

function App() {
  return (
    <div className="App">
       <Heading />
       <FullBody />
       <Footer/>
    </div>
  );
}

export default App;
