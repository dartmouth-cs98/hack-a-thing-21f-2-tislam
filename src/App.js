import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import React from 'react'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Create />
        </Route>
        <Route path="/create">
          <Notes/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
