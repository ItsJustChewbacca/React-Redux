import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Post from './components/Post.jsx';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
        {/*using Switch to match components for params from top to bottom
          *Only loading one component
        */}
          <Route exact path='/' component={ Home }/>
          <Route path='/about' component={ About }/>
          <Route path='/contact' component={ Contact }/>
          {/* Route paramter*/}
          <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
