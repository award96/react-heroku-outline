import React, {useState, useContext} from 'react';
import {RoutesContext} from './routesContext'
import {Route, Switch} from 'react-router-dom'
import {Banner, Sidebar, Home, Footer} from './components/index'
import './App.css';

function App() {

  const {routes} = useContext(RoutesContext)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div
      className="App"
    >
      <div
        className="banner"
      >
        {/*  */}
      </div>
      <div
        className="sidebar"
      >
        <Sidebar
          isOpen={isSidebarOpen}
        />
      </div>
      <Switch>
        {/* home page */}
        <Route
          path={routes.home}
        >
          <Home />
        </Route>
      </Switch>
      <div
        className="footer"
      >
        {/*  */}
      </div>
    </div>
  );
}

export default App;
