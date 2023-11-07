import Home from './webpages/Home';
import AboutUs from './webpages/AboutUs';
import Team from './webpages/Team';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Books from './webpages/Books';
import Videos from './webpages/Videos';
import './App.css';
function App(){
  return(
    <Router>
      <div style={{margin:1}}>
        <NavBar/>
        <div class="body">
        <Routes>
          <Route exact path="/RAHAT" Component={Home}></Route>
          <Route path="/AboutUs" Component={AboutUs}></Route>
          <Route path="/Team" Component={Team}></Route>
          <Route path="/Books" Component={Books}></Route>
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>


  );
}
export default App;