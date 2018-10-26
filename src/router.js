import React, {Component} from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
// import App from './App'
import Admin from './admin'
import Home from './pages/Home'
import Buttons from './pages/UI/Buttons'

class ERouter extends Component {
  render() {
    return (
        <HashRouter>
          <Admin>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/ui/buttons' component={Buttons}/>
            <Redirect to="/home" />
            </Switch>
          </Admin>
        </HashRouter>
    );
  }
}

export default ERouter;