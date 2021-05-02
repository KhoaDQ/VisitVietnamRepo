import './App.css';
import {Home} from './Home';
import {Event} from './Event';
import {Gift} from './Gift';
import {Clothes} from './Clothes';
import {HomeStay} from './HomeStay';
import {Foody} from './Foody';
import {Navigation} from './Navigation';
import {FirstNav} from './FirstNav';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <FirstNav/>
        
        <Navigation/>

        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/event" component={Event}/>
          <Route path="/foody" component={Foody}/>
          <Route path="/homeStay" component={HomeStay}/>
          <Route path="/clothes" component={Clothes}/>
          <Route path="/gift" component={Gift}/>
        </Switch>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
