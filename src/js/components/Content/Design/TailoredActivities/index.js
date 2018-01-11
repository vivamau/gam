import React, { Component } from 'react';
import FormRadio from '../../../Commons/FormMultiRadio';
import FormTextArea from '../../../Commons/FormTextArea';
import FormHeader from '../../../Commons/FormHeaders/FormHeader'; 

const labels = ["Gender and age","Gender", "Age", "Neither gender nor age"];

class ContentDesignTailoredActivities extends Component {
    render () {
        return ( 
            <div>
                <h1>Tailored Activities</h1>
                <hr/>
                <FormHeader titleH2="8. The planned activities address inequalities related to:" titleSaveDate="yesterday">Please select the applicable option</FormHeader>
                <hr/>
                <FormRadio values={labels}/>
                <FormHeader titleH2="9. For each CSP activity, indicate which gender and/or age groups are targeted by selecting all that apply in the following tables: " titleSaveDate="yesterday">Please note that number of lines for each table depends on the number of activities specified at CSP definition</FormHeader>
                <hr/>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan="8" className="text-center">Female</th>
                        </tr>
                        <tr>
                            <th className="col-sm-1 text-center"></th>
                            <th className="col-sm-1 text-center">0-2 years</th>
                            <th className="col-sm-1 text-center">3-5 years</th>
                            <th className="col-sm-1 text-center">6-11 years</th>
                            <th className="col-sm-1 text-center">12-17 years</th>
                            <th className="col-sm-1 text-center">18-59 years</th>
                            <th className="col-sm-1 text-center">60+ years</th>
                            <th className="col-sm-1 text-center">Age Not Specified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="text-right">CSP Activity 1</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">CSP Activity 2</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">CSP Activity 3</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">CSP Activity 4</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan="8" className="text-center">Male</th>
                        </tr>
                        <tr>
                            <th className="col-sm-1 text-center"></th>
                            <th className="col-sm-1 text-center">0-2 years</th>
                            <th className="col-sm-1 text-center">3-5 years</th>
                            <th className="col-sm-1 text-center">6-11 years</th>
                            <th className="col-sm-1 text-center">12-17 years</th>
                            <th className="col-sm-1 text-center">18-59 years</th>
                            <th className="col-sm-1 text-center">60+ years</th>
                            <th className="col-sm-1 text-center">Age Not Specified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="text-right">CSP Activity 1</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">CSP Activity 2</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">CSP Activity 3</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">CSP Activity 4</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan="8" className="text-center">Sex Not Specified</th>
                        </tr>
                        <tr>
                            <th className="col-sm-1 text-center"></th>
                            <th className="col-sm-1 text-center">0-2 years</th>
                            <th className="col-sm-1 text-center">3-5 years</th>
                            <th className="col-sm-1 text-center">6-11 years</th>
                            <th className="col-sm-1 text-center">12-17 years</th>
                            <th className="col-sm-1 text-center">18-59 years</th>
                            <th className="col-sm-1 text-center">60+ years</th>
                            <th className="col-sm-1 text-center">Age Not Specified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="text-right">CSP Activity 1</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">CSP Activity 2</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">CSP Activity 3</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th className="text-right">CSP Activity 4</th>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                            <td className="text-center"><input type="checkbox"/></td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
                <FormHeader titleH2="10. Please indicate in which paragraph/s of the document evidence of the responses to questions 8 and 9 can be found." titleSaveDate="yesterday">You can also further explain the reasons for the answers provided to questions 8 and 9. </FormHeader>
                <hr/>   
                <div class="row">
                    <div class="col-sm-12">
                        <FormTextArea label="Your Message" note="Please leave a message" rows="5"/>
                    </div>
                </div>
                <hr/>
                <div class="pull-right"><button class="wfp-btn--primary xlarge">Save and Go to Participation</button></div>
            </div>
        )
    }
}
export default ContentDesignTailoredActivities;