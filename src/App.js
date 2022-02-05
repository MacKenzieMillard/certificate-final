import './App.css';

import Nav from './components/nav/nav';
import Home from './components/home/home';
// import Form from './components/form/form';
import Footer from './components/footer/footer';

// import firebase from './utilities/firebase';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
