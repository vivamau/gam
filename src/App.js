import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Header from './js/components/Header';
import PageHeader from './js/components/PageHeader';
import NavigationHomePage from './js/components/Navigation';
import ContentHomePage from './js/components/Content/HomePage';
import ContentCSP from './js/components/Content/CSP'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <PageHeader/>
          <div className="row">
            <div className="col-sm-3">
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={NavigationHomePage} />
              </Switch>
            </BrowserRouter>
            </div>
            <div className="col-sm-9">
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={ContentHomePage} />
                <Route path="/csp" exact component={ContentCSP} />
              </Switch>
            </BrowserRouter>
            </div>
          </div>
        </div>
        

      </div>
    );
  }
}

export default App;
