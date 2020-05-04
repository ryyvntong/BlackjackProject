import React, {Component} from 'react';
import './App.css';
import LandingPage from './containers/LandingPage/LandingPage'
import {Route, Switch, Redirect} from 'react-router-dom'


// import Logout from './containers/auth/logout/logout'
// import {connect} from 'react-redux'
// import * as actions from './store/actions/index'
class App extends Component {
  render (){
    let routes=(
    <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
    );
    
    return(
      <div>
            {routes}
      </div>
    )
  }
}

export default App;

//make layout make render. redux for settings and rules 