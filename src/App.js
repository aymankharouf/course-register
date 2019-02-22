import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Dashboard from './components/dashboard/Dashboard'
import StudentDetails from './components/students/StudentDetails'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class App extends React.Component {
  componentDidMount() {
    M.AutoInit()
  }  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <div className="app-header">
            <img src="img/logo.svg" className="app-logo" alt="logo" />
            <h2 className="app-link">Welcome to React</h2>
          </div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/student/:id' component={StudentDetails}/> 
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
