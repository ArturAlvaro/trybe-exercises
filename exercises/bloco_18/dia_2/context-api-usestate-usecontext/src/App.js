import React from 'react';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import UserPage from './pages/UserPage';
import CharInfo from './pages/CharInfo';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/userPage" component={ UserPage } />
      <Route path="/charInfo/:id" component={ CharInfo } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
