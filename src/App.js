import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import React from 'react'
import { TextField } from '@material-ui/core'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'


 const theme = createMuiTheme({
  root: {
    background: 'linear-gradient( 45deg, #333, #999)',
    border: 0, 
    color: 'black',
    padding: '0 30px'
    
  }, 
  palette: {
    type: "dark",
    primary: {
      main: "#26a27b"
    },
    secondary: {
      main: "#fafafa"
    }
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
