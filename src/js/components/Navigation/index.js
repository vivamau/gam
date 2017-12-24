import React, { Component } from 'react';
class NavigationHomePage extends Component {

    render () {
        return (
            <div className="menu-workflow">
                <h3 className="text-uppercase workflow-title"><a href="csp.html">Country Strategic Plan</a></h3>
                <h3 className="text-uppercase workflow-title"><a href="identity.html">Identifying Information</a></h3>
                <h3 className="text-uppercase workflow-title">Design</h3>
                <h3 className="text-uppercase workflow-title">Monitoring</h3>
                <h3 className="text-uppercase workflow-title">Results</h3>
                <h3 className="text-uppercase workflow-title">Action Plan</h3>
                <h3 className="text-uppercase workflow-title">Close</h3>
            </div>
        )
      }
}    

export default NavigationHomePage;