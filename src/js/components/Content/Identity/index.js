import React, { Component } from 'react';
import FormHeader from '../../Commons/FormHeaders/FormHeader'; 
import FormInputText from '../../Commons/FormInputText'

class ContentIdentity extends Component {
    render () {
        return (
            <form className="form-horizontal">
                <FormHeader titleH2="Country Director" titleSaveDate="yesterday">Is this the Country Director?</FormHeader>
                <hr/>
                <FormInputText label="Name" note="This field is automatically filled by GAM. If you need to change it, please let me know" type="text"/>
                <FormInputText label="Function" note="Possibly a list of functional areas to use" type="text"/>
                <FormInputText label="Date" note="What does date mean?" type="date"/>
                <hr/>
                <FormHeader titleH2="GaM Design Completed by:" titleSaveDate="yesterday">information about the officer who is going to complete GAM</FormHeader>
                <hr/>
                <FormInputText label="Name" note="This field is automatically filled by GAM. If you need to change it, please let me know" value="Maurizio Blasilli" status="disable" type="text"/>
                <FormInputText label="Function" note="Possibly a list of functional areas to use" type="text"/>
                <FormInputText label="Date" note="What does date mean?" type="date"/>
                <hr/>
                <FormHeader titleH2="Monitoring Officers per year" titleSaveDate="yesterday">Number of years, is depending by the number of the years specified in the CSP section.</FormHeader>
                <div>
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#y1" aria-controls="y1" role="tab" data-toggle="tab">YEAR 1</a></li>
                        <li role="presentation"><a href="#y2" aria-controls="y2" role="tab" data-toggle="tab">YEAR 2</a></li>
                        <li role="presentation"><a href="#y3" aria-controls="y3" role="tab" data-toggle="tab">YEAR 3</a></li>
                        <li role="presentation"><a href="#y4" aria-controls="y4" role="tab" data-toggle="tab">YEAR 4</a></li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="y1">
                            <div className="internal-form">
                                <h4>Person Completing GAM, Year 1</h4>
                                <hr/>
                                <FormInputText label="Name" note="This field is automatically filled by GAM. If you need to change it, please let me know" type="text"/>
                                <FormInputText label="Function" note="Possibly a list of functional areas to use" type="text"/>
                                <FormInputText label="Date" note="What does date mean?" type="date"/>
                                <hr/><br/>
                                <h4>Person Reviewing GAM, Year 1</h4>
                                <hr/>
                                <FormInputText label="Name" note="This field is automatically filled by GAM. If you need to change it, please let me know" type="text"/>
                                <FormInputText label="Function" note="Possibly a list of functional areas to use" type="text"/>
                                <FormInputText label="Date" note="What does date mean?" type="date"/>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="y2">
                            <div className="internal-form">
                                <h4>Person Completing GAM, Year 2</h4>
                                <hr/>
                                <FormInputText label="Name" note="This field is automatically filled by GAM. If you need to change it, please let me know" type="text"/>
                                <FormInputText label="Function" note="Possibly a list of functional areas to use" type="text"/>
                                <FormInputText label="Date" note="What does date mean?" type="date"/>
                                <hr/><br/>
                                <h4>Person Reviewing GAM, Year 2</h4>
                                <hr/>
                                <FormInputText label="Name" note="This field is automatically filled by GAM. If you need to change it, please let me know" type="text"/>
                                <FormInputText label="Function" note="Possibly a list of functional areas to use" type="text"/>
                                <FormInputText label="Date" note="What does date mean?" type="date"/>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="y3">
                            <div className="internal-form">
                                <h4>Person Completing GAM, Year 3</h4>
                                <hr/>
                                <FormInputText label="Name" note="This field is automatically filled by GAM. If you need to change it, please let me know" type="text"/>
                                <FormInputText label="Function" note="Possibly a list of functional areas to use" type="text"/>
                                <FormInputText label="Date" note="What does date mean?" type="date"/>
                                <hr/><br/>
                                <h4>Person Reviewing GAM, Year 3</h4>
                                <hr/>
                                <FormInputText label="Name" note="This field is automatically filled by GAM. If you need to change it, please let me know" type="text"/>
                                <FormInputText label="Function" note="Possibly a list of functional areas to use" type="text"/>
                                <FormInputText label="Date" note="What does date mean?" type="date"/>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="y4">
                            <div className="internal-form">
                                <h4>Person Completing GAM, Year 4</h4>
                                <hr/>
                                <FormInputText label="Name" note="This field is automatically filled by GAM. If you need to change it, please let me know" type="text"/>
                                <FormInputText label="Function" note="Possibly a list of functional areas to use" type="text"/>
                                <FormInputText label="Date" note="What does date mean?" type="date"/>
                                <hr/><br/>
                                <h4>Person Reviewing GAM, Year 4</h4>
                                <hr/>
                                <FormInputText label="Name" note="This field is automatically filled by GAM. If you need to change it, please let me know" type="text"/>
                                <FormInputText label="Function" note="Possibly a list of functional areas to use" type="text"/>
                                <FormInputText label="Date" note="What does date mean?" type="date"/>
                            </div>
                        </div>
                    </div>
                </div>  
                <hr/>                 
                <div className="pull-right"><button className="wfp-btn--primary xlarge">Save and Go To Next Phase (Identifying)</button></div>
            </form>
        )
      }
}    

export default ContentIdentity;