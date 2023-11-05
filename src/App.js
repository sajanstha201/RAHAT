import Home from './webpages/Home';
import ContactUs from './webpages/ContactUs';
import AboutUs from './webpages/AboutUs';
import Team from './webpages/Team';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App(){
  return(
    <Router>
      <div style={{margin:6}}>
        <NavBar/>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/AboutUs" Component={AboutUs}></Route>
          <Route path="/ContactUs" Component={ContactUs}></Route>
          <Route path="/Team" Component={Team}></Route>
        </Routes>
      </div>
    </Router>

  );
}
export default App;