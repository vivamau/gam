import React, { Component } from 'react';
import FormRadio from '../../../Commons/FormMultiRadio';
import FormTextArea from '../../../Commons/FormTextArea';
import FormHeader from '../../../Commons/FormHeaders/FormHeader'; 

const single = ["yes/no"];
class ContentDesignParticipation extends Component {
    render () {
        return ( 
            <div>
                <h1>Participation</h1>
                <hr/>
                <FormHeader titleH2="11. Did direct (Tier 1) beneficiaries contribute to the design of the TICSP/ICSP/CSP? " titleSaveDate="yesterday">Please select the applicable option</FormHeader>
                <hr/>
                <FormRadio values={single}/>
                <FormHeader titleH2="12. If yes, which sex and age beneficiary groups contributed to the design of the TICSP/ICSP/CSP? " titleSaveDate="yesterday"/>
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
                            <th className="text-right">12-17 years</th>
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
                <FormHeader titleH2="13. Please indicate in which paragraph/s of the document evidence of your responses to questions 11 and 12 can be found." titleSaveDate="yesterday"> </FormHeader>
                <hr/>   
                <div class="row">
                    <div class="col-sm-12">
                        <FormTextArea label="You can also further explain the reasons for the answers provided to questions 11 and 12." rows="5"/>
                    </div>
                </div>
                <hr/>    
                <div class="pull-right"><button class="wfp-btn--primary xlarge">Save and Go To Benefits</button></div>
            </div>
        )
    }
}
export default ContentDesignParticipation;