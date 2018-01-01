import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Header from './js/components/Header';
import PageHeader from './js/components/PageHeader';
import Footer from './js/components/Footer'

import NavigationHomePage from './js/components/Navigation/HomePage';
import NavigationCSP from './js/components/Navigation/CSP';
import NavigationIdentity from './js/components/Navigation/Identity';

import ContentHomePage from './js/components/Content/HomePage';
import ContentCSP from './js/components/Content/CSP';
import ContentIdentity from './js/components/Content/Identity';

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
                <Route path={process.env.PUBLIC_URL + '/'} exact component={NavigationHomePage} />
                <Route path={process.env.PUBLIC_URL + '/csp'} exact component={NavigationCSP}/>
                <Route path={process.env.PUBLIC_URL + '/identity'} exact component={NavigationIdentity}/>
              </Switch>
            </BrowserRouter>
            </div>
            <div className="col-sm-9">
            <BrowserRouter>
              <Switch>
                <Route path={process.env.PUBLIC_URL + '/'} exact component={ContentHomePage} />
                <Route path={process.env.PUBLIC_URL + '/csp'} exact component={ContentCSP} />
                <Route path={process.env.PUBLIC_URL + '/identity'} exact component={ContentIdentity}/>
              </Switch>
            </BrowserRouter>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
