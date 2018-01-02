import React, { Component } from 'react';
class NavigationDesign extends Component {

    render () {
        return (
            <div className="menu-workflow">
                <h3 className="text-uppercase workflow-title"><a href="csp">Country Strategic Plan</a></h3>
                <h3 className="text-uppercase workflow-title"><a href="identity">Summary Information</a></h3>
                <h3 className="text-uppercase workflow-title"><a href="design">Design</a></h3>
                <ul>
                    <li><a href="design/genderanalysis">Gender Analysis</a></li>
                    <li><a href="#">Taylored Activities</a></li>
                    <li><a href="#">Participations</a></li>
                    <li><a href="#agencyprj">Benefits</a></li>
                </ul>
                <h3 className="text-uppercase workflow-title">Monitoring</h3>
                <h3 className="text-uppercase workflow-title">GaM Code</h3>
            </div>
        )

    }
}    

export default NavigationDesign;