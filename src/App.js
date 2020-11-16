import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import { Game } from './components/Game/Game';
import { GameHvC } from './components/Game/GameHvC';

import {GameHvCModeEasy} from './components/Game/GameHvCModeEasy';

import {GameHvCModeHard} from './components/Game/GameHvCModeHard'



import {Home} from './components/Home/Home'
import { Instructions } from './components/Home/Instructions';

function App() {
    return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Human-VS-Humain" component={Game}></Route>
          <Route exact path="/Human-VS-Computer" component={GameHvC}></Route> 
          <Route exact path="/Human-VS-Computer-Easy" component={GameHvCModeEasy}></Route> 
          
          <Route exact path="/Human-VS-Computer-Hard" component={GameHvCModeHard}></Route> 

          <Route exact path="/Instructions" component={Instructions}></Route> 
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
