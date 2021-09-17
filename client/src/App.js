import { useState } from 'react';
import './App.css';
import Main from './views/Main';
import LoginReg from './views/LoginReg';
import PirateNew from './views/PirateNew';
import PirateView from './views/PirateView';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [_id, setId] = useState('');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginReg setId={setId} />
        </Route>
        <Route exact path="/pirates">
          <Main _id={_id} />
        </Route>
        <Route exact path="/pirate/new">
          <PirateNew />
        </Route>
        <Route exact path="/pirate/:_id">
          <PirateView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
