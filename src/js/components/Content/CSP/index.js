import React, { Component } from 'react';
import FormHeader from '../../Commons/FormHeaders/FormHeader'; 
import FormHeaderMultiButtons from '../../Commons/FormHeaders/FormHeaderMultiButtons';
import FormInputText from '../../Commons/FormInputText'
import FormSelect from '../../Commons/FormSelect'

class ContentCSP extends Component {
    render () {
        return (
            <form className="form-horizontal">
                <FormHeader titleH2="CSP Information" titleSaveDate="yesterday">information about the CSP for Afghanistan</FormHeader>
                <hr/>
                <FormInputText label="Title" note="CSP Title"/>
                <FormInputText label="CSP Document Link" note="Add link to the CSP document" value="select a file" status="disable"/>

                <div class="form-group">
                    <label class="control-label col-sm-3">Start Year<br/><small class="note">CSP starting year</small></label>
                    <div class="col-sm-3">
                        <input type="text" required class="form-control" />
                    </div>
                    <label class="control-label col-sm-3">End Year<br/><small class="note">CSP ending year</small></label>
                    <div class="col-sm-3">
                        <input type="text" required class="form-control" />
                    </div>
                </div>
                <FormInputText label="Number of years to Monitor" note="This number will affect the Identifying Information Section"/>
                <hr/>
                <FormHeaderMultiButtons titleH2="Strategic Outcome nr. 1" titleSaveDate="yesterday">Define activities within this CSP</FormHeaderMultiButtons>
                <hr/>
                <FormInputText label="Activity Title" note="This field is automatically filled by GAM. If you need to change it, please let me know"/>
                <hr/>
                <FormSelect/>
                <hr/>
                <div class="pull-right"><button class="wfp-btn--primary xlarge">Save and Go To Next Phase (Identifying)</button></div>
            </form>
        )
      }
}    

export default ContentCSP;