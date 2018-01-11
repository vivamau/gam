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
                <FormHeader titleH2="14. Does the planning document (TICSP/ICSP/CSP) clearly describe the activities that will contribute to achieving gender equality? " titleSaveDate="yesterday">Please select the applicable option</FormHeader>
                <hr/>
                <FormRadio values={labels}/>
                <FormHeader titleH2="15.  If yes, indicate which sex and/or age groups will benefit from the activities that will contribute to achieving gender equality: " titleSaveDate="yesterday"/>
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
                <FormHeader titleH2="16. Please indicate in which paragraph/s of the document evidence of your responses to questions 14 and 15 can be found." titleSaveDate="yesterday"></FormHeader>
                <hr/>   
                <div class="row">
                    <div class="col-sm-12">
                        <FormTextArea label="You can also further explain the reasons for the answers provided to questions 14 and 15." rows="5"/>
                    </div>
                </div>
                <hr/>     
                <div class="pull-right"><button class="wfp-btn--primary xlarge">Save and view GaM Code</button></div>
            </div>
        )
    }
}
export default ContentDesignBenefits;