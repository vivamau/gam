import React, { Component } from 'react';
import FormRadio from '../../../Commons/FormMultiRadio';
import FormTextArea from '../../../Commons/FormTextArea';
import FormHeader from '../../../Commons/FormHeaders/FormHeader'; 

const labels = ["yes","no","not applicable"];
class ContentDesignBenefits extends Component {
    render () {
        return ( 
            <div>
                <h1>Benefits</h1>
                <hr/>
                <FormHeader titleH2="1. Does the planning document (TICSP/ICSP/CSP) clearly describe the activities that will contribute to achieving gender equality?: " titleSaveDate="yesterday">Please select the applicable option</FormHeader>
                <hr/>
                <FormRadio values={labels}/>
                <FormHeader titleH2="2.  If yes, indicate which sex and/or age groups will benefit from the activities that will contribute to achieving gender equality: " titleSaveDate="yesterday"/>
                <hr/>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="col-sm-3 text-center"></th>
                            <th className="col-sm-3 text-center">Female</th>
                            <th className="col-sm-3 text-center">Male</th>
                            <th className="col-sm-3 text-center">Sex not specified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="text-right">0-2 years</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">3-5 years</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">6-12 years</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">3-17 years</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">18-59 years</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">60+ years</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">Age not specified</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
                <FormHeader titleH2="3. Please indicate in which paragraph of the document evidence of your response can be found. You can also further explain the reasons for the answers provided to questions 1 and 2." titleSaveDate="yesterday">You can also further explain the reasons for the answers provided to questions 1 and 2. </FormHeader>
                <hr/>   
                <div class="row">
                    <div class="col-sm-12">
                        <FormTextArea label="Your Message" note="Please leave a message" rows="5"/>
                    </div>
                </div>
                <hr/>     
                <div class="pull-right"><button class="wfp-btn--primary xlarge">Save and Go To Monitoring Phase</button></div>
            </div>
        )
    }
}
export default ContentDesignBenefits;