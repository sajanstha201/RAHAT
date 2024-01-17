import Home from './webpages/Home';
import AboutUs from './webpages/AboutUs';
import Team from './webpages/Team';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Resources from './webpages/Resources';
import './App.css';
import Counsellor from './webpages/Counsellor';
function App(){
  return(
    <Router>
      <div style={{margin:1,background:"rgb(239,230,213,255)"}}>
        <NavBar/>
        <div class="body">
        <Routes>
          <Route exact path="/RAHAT" Component={Home}></Route>
          <Route path="/AboutUs" Component={AboutUs}></Route>
          <Route path="/Team" Component={Team}></Route>
          <Route path="/Resources" Component={Resources}></Route>
          <Route path="/Counsellor" Component={Counsellor}></Route>
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>


  );
}
export default App;