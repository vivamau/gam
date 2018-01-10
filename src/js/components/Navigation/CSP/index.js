import React, { Component } from 'react';
class NavigationCSP extends Component {

    render () {
        return (
            <div className="menu-workflow">
                <h3 className="text-uppercase workflow-title"><a href="csp">Country Strategic Plan</a></h3>
                <ul>
                    <li><a href="#agencyprj">CSP Information</a></li>
                    <li><a href="#">Document Upload</a> </li>
                    <li><a href="#">Strategic Outcomes</a></li>
                </ul>
                <h3 className="text-uppercase workflow-title"><a href="identity">Summary Information</a></h3>
                <h3 className="text-uppercase workflow-title"><a href="design">Design</a></h3>
                <h3 className="text-uppercase workflow-title">Monitoring</h3>
                <h3 className="workflow-title">GaM CODE</h3>
            </div>
        )
      }
}    

export default NavigationCSP;