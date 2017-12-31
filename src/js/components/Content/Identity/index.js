import React, { Component } from 'react';
import FormHeader from '../../Commons/FormHeaders/FormHeader'; 
import FormHeaderMultiButtons from '../../Commons/FormHeaders/FormHeaderMultiButtons';
import FormInputText from '../../Commons/FormInputText'
import FormSelect from '../../Commons/FormSelect'

class ContentIdentity extends Component {
    render () {
        return (
            <form className="form-horizontal">
                <FormHeader titleH2="Officer Completing GaM" titleSaveDate="yesterday">information about the officer who is going to complete GAM</FormHeader>
                <hr/>
                <FormInputText label="Name" note="This field is automatically filled by GAM. If you need to change it, please let me know" value="Maurizio Blasilli" status="disable" type="text"/>
                <FormInputText label="Function" note="Possibly a list of functional areas to use" type="text"/>
                <FormInputText label="Date" note="What does date mean?" type="date"/>
                <hr/>
                <FormHeader titleH2="Officer Reviewing GaM" titleSaveDate="yesterday">Is this the Country Director?</FormHeader>
                <hr/>
                <FormInputText label="Activity Description" note="This field is automatically filled by GAM. If you need to change it, please let me know"/>
                <hr/>
                <FormSelect/>
                <hr/>
                <div className="pull-right"><button className="wfp-btn--primary xlarge">Save and Go To Next Phase (Identifying)</button></div>
            </form>
        )
      }
}    

export default ContentIdentity;