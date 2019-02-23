import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Dashboard from './components/dashboard/Dashboard'
import StudentDetails from './components/students/StudentDetails'
import 'materialize-css/dist/css/materialize.min.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
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
