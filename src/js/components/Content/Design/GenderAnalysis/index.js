import React, { Component } from 'react';
import FormRadio from '../../../Commons/FormMultiRadio';
import FormTextArea from '../../../Commons/FormTextArea';
import FormHeader from '../../../Commons/FormHeaders/FormHeader'; 

const labels = ["A gender and age analysis","A gender analysis", "An age analysis", "Neither a gender nor age analysis"];
const single = ["yes/no"];
class ContentDesignGenderAnalysis extends Component {
    render () {
        return ( 
            <div>
                <h1>Gender Analysis</h1>
                <hr/>
                <FormHeader titleH2="1. Integrated throughout the planning document (TICSP, ICSP, CSP) there is: " titleSaveDate="yesterday">Please select the applicable option</FormHeader>
                <hr/>
                <FormRadio values={labels}/>
                <FormHeader titleH2="2. The sex and/or age groups analysed are: " titleSaveDate="yesterday"/>
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
                <FormHeader titleH2="3. Please indicate in which paragraph of the document the gender analysis is presented." titleSaveDate="yesterday">You can also further explain the reasons for the answers provided to questions 1 and 2. </FormHeader>
                <hr/>   
                <div class="row">
                    <div class="col-sm-12">
                        <FormTextArea label="Your Message" note="Please leave a message" rows="5"/>
                    </div>
                </div>
                <hr/>
                <FormHeader titleH2="4. Does the planning document (TICSP, ICSP, CSP) make explicit reference to gender-responsive monitoring?" titleSaveDate="yesterday"></FormHeader>
                <hr/>  
                <FormRadio values={single}/>
                <FormHeader titleH2="5. Does the Exit and Transition Strategy include specific reference to advancing gender equality?" titleSaveDate="yesterday"></FormHeader>
                <hr/>   
                <FormRadio values={single}/>
                <FormHeader titleH2="6. Is there explicit reference to partnering with women's rights or gender equality entities?" titleSaveDate="yesterday"></FormHeader>
                <hr/>   
                <FormRadio values={single}/>
                <FormHeader titleH2="7. Is there a stated commitment to allocate resources to gender equality activities?" titleSaveDate="yesterday"></FormHeader>
                <hr/>    
                <FormRadio values={single}/>     
                <div class="pull-right"><button class="wfp-btn--primary xlarge">Save and Go Ahead (Taylored Activities)</button></div>
            </div>
        )
    }
}
export default ContentDesignGenderAnalysis;