import React, { Component } from 'react';
class NavigationIdentity extends Component {

    render () {
        return (
            <div className="menu-workflow">
                <h3 className="text-uppercase workflow-title"><a href="csp">Country Strategic Plan</a></h3>
                <h3 className="text-uppercase workflow-title"><a href="identity">Identifying Information</a></h3>
                <ul>
                    <li><a href="#agencyprj">Design: Completing Person</a></li>
                    <li><a href="#">Design: Reviewing Person</a> </li>
                </ul>
                <h3 className="text-uppercase workflow-title">Design</h3>
                <h3 className="text-uppercase workflow-title">Monitoring</h3>
                <h3 className="text-uppercase workflow-title">Results</h3>
                <h3 className="text-uppercase workflow-title">Action Plan</h3>
                <h3 className="text-uppercase workflow-title">Close</h3>
            </div>
        )

    }
}    

export default NavigationIdentity;