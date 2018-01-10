import React, { Component } from 'react';
class NavigationDesign extends Component {

    render () {
        return (
            <div className="menu-workflow">
                <h3 className="text-uppercase workflow-title"><a href="../csp">Country Strategic Plan</a></h3>
                <h3 className="text-uppercase workflow-title"><a href="../identity">Summary Information</a></h3>
                <h3 className="text-uppercase workflow-title"><a href="../design">Design</a></h3>
                <ul>
                    <li><a href="../design/genderanalysis">Gender Analysis</a></li>
                    <li><a href="../design/tailoredactivities">Tailored Activities</a></li>
                    <li><a href="../design/participation">Participation</a></li>
                    <li><a href="../design/benefits">Benefits</a></li>
                </ul>
                <h3 className="text-uppercase workflow-title">Monitoring</h3>
                <h3 className="workflow-title">GaM CODE</h3>
            </div>
        )

    }
}    

export default NavigationDesign;