import React, { Component } from 'react';
class NavigationHomePage extends Component {

    render () {
        return (
            <div className="menu-workflow">
                <h3 className="text-uppercase workflow-title"><a href="csp">Country Strategic Plan</a></h3>
                <h3 className="text-uppercase workflow-title"><a href="identity">Summary Information</a></h3>
                <h3 className="text-uppercase workflow-title"><a href="design">Design</a></h3>
                <h3 className="text-uppercase workflow-title">Monitoring</h3>
                <h3 className="text-uppercase workflow-title">GaM Code</h3>
            </div>
        )
      }
}    

export default NavigationHomePage;