import './App.css';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Home from './components/Home/Home';
import CountryDetail from '../src/components/CountryDetail/CountryDetail'
import Nomatch from './components/NoMatch/Nomatch';
import Header from './components/Header/Header';



function App() {
  
  return (
    <div className="App">

     
        <Router>
          <Header />

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/country/:countryName">
              <CountryDetail />
            </Route>

            <Route path="*">
              <Nomatch />
            </Route>
        
          </Switch>

        </Router>

    

    </div>
  );
}

export default App;
