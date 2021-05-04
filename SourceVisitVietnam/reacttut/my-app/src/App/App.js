import './App.css';
import {Home} from '../Home/Home';
import {Event} from '../Entity/Event/Event';
import {Gift} from '../Entity/Gift/Gift';
import {Clothes} from '../Entity/Clothes/Clothes';
import {HomeStay} from '../Entity/HomeStay/HomeStay';
import {Foody} from '../Entity/Foody/Foody';
import {Navigation} from '../Component/Navigation/Navigation';
import {FooterPage} from '../Component/FooterPage/FooterPage';
import {FirstNav} from '../Component/FirstNav/FirstNav';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="contain">
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
