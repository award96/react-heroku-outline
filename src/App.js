import React, {useState, useContext} from 'react';
import {RoutesContext} from './routesContext'
import {Route, Switch} from 'react-router-dom'
import {Banner, Sidebar, Home, Footer} from './components/index'
import './App.css';

function App() {

  const {routes} = useContext(RoutesContext)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div
      className="App"
    >
      <div
        className="banner"
      >
        <Banner />
      </div>
      <Switch>
        {/* home page */}
        <Route
          path={routes.home}
        >
          <div
            className="home"
          >
            <Home />
          </div>
        </Route>
      </Switch>
      <div
        className="footer"
      >
        <Footer />
      </div>
      <div
        className="sidebar"
      >
        <Sidebar
          isOpen={isSidebarOpen}
        />
      </div>
    </div>
  );
}

export default App;
