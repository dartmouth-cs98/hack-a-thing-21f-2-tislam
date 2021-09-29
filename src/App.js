import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { green, purple } from '@material-ui/core/colors'


 const theme = createMuiTheme({
 
  palette: {
    primary: green,
    secondary: purple
   }

 })

function App() {
  return (
    <ThemeProvider theme = {theme}>
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
    </ThemeProvider>
  );
}

export default App;
