import './App.css';
import {Home} from './Home';
import {Event} from './Entity/Event';
import {Gift} from './Entity/Gift';
import {Clothes} from './Entity/Clothes';
import {HomeStay} from './Entity/HomeStay';
import {Foody} from './Entity/Foody';
import {Navigation} from './Component/Navigation';
import {FooterPage} from './Component/FooterPage';
import {FirstNav} from './Component/FirstNav';

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

        <FooterPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
