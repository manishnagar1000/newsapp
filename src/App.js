// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'


import React, { Component } from 'react'


console.log(process.env.REACT_APP_NEWS_API_KEY )
class App extends Component {
  
  apikey="0568e5cd54794440999f905512939470"

state ={
  progress:0
}
setProgress = (progress) => {
  this.setState({progress:progress})
}

  render() {
    return (
      <div>
        <Router>
          
        <Navbar/>
        <LoadingBar
        height="3px"
        color='#f11946'
        progress={this.state.progress}
      />

<Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize="5" country="in" category="general"/></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize="5" country="in" category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize="5" country="in" category="entertainment"/></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize="5" country="in" category="general"/></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize="5" country="in" category="health"/></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize="5" country="in" category="science"/></Route>
            <Route exact path="/sport"><News setProgress={this.setProgress} apikey={this.apikey}  key="sport" pageSize="5" country="in" category="sport"/></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize="5" country="in" category="technology"/></Route>

        </Switch>
      </Router>
      </div>
    )
  }
}


export default App;
