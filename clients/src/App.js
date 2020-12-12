import React from 'react';
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import GlobalContext from '../src/utils/GlobalContext'
import Homepage from './pages/Homepage';
import ViewTodos from './pages/ViewTodos';
import AddTodos from './pages/AddTodos';
import Navbar from './components/Navbar';
import GlobalProvider from '../src/utils/GlobalContext';

    
function App() {
  return (
    
    <Router>
      <GlobalProvider>
      <Navbar />

      <div className= "App">
        <Switch>
          <Route path='/' component={ Homepage }/>
          <Route path='/todos' component={ ViewTodos }/>
          <Route path='/todos/new' component={ AddTodos }/>
        </Switch>
      </div>
      </GlobalProvider>
    </Router>
  );
}


export default App;
