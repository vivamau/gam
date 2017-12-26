import React, { Component } from 'react';
class NavigationCSP extends Component {

    render () {
        return (
            <div className="menu-workflow">
                <h3 class="text-uppercase workflow-title"><a href="">Country Strategic Plan</a></h3>
                <ul>
                    <li><a href="#agencyprj">CSP Information</a></li>
                    <li><a href="#">Document Upload</a> </li>
                    <li><a href="#">TICSP/ICSP/CSP Strategic Outcomes</a></li>
                </ul>
                <h3 class="text-uppercase workflow-title"><a href="identity.html">Identifying Information</a></h3>
                <h3 class="text-uppercase workflow-title">Design</h3>
                <h3 class="text-uppercase workflow-title">Monitoring</h3>
                <h3 class="text-uppercase workflow-title">Results</h3>
                <h3 class="text-uppercase workflow-title">Action Plan</h3>
                <h3 class="text-uppercase workflow-title">Close</h3>
            </div>
        )
      }
}    

export default NavigationCSP;