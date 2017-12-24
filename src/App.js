import React, { Component } from 'react';
import Header from './js/components/Header'
import PageHeader from './js/components/PageHeader'
import NavigationHomePage from './js/components/Navigation'
import ContentHomePage from './js/components/Content'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <PageHeader/>
          <div className="row">
            <div className="col-sm-3">
              <NavigationHomePage/>
            </div>
            <div className="col-sm-9">
              <ContentHomePage/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
