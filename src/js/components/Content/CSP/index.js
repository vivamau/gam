import React, { Component } from 'react';
import FormHeader from '../../Commons/FormHeader'; 
import FormInputText from '../../Commons/FormInputText'

class ContentCSP extends Component {
    render () {
        return (
            <form className="form-horizontal">
                <FormHeader titleH2="CSP Information" titleSaveDate="yesterday">information about the CSP for Afghanistan</FormHeader>
                <hr/>
                <FormInputText label="Title" note="CSP Title"/>
                <FormInputText label="CSP Document Link" note="Add link to the CSP document" value="select a file" status="disable"/>

                <div class="form-group">
                    <label class="control-label col-sm-3">From Date<br/><small class="note">CSP starting date</small></label>
                    <div class="col-sm-3">
                        <input type="date" required class="form-control" />
                    </div>
                    <label class="control-label col-sm-3">To Date<br/><small class="note">CSP ending date</small></label>
                    <div class="col-sm-3">
                        <input type="date" required class="form-control" />
                    </div>
                </div>
                <FormInputText label="Number of years to Monitor" note="This number will affect the Identifying Information Section"/>
                <hr/>
                <FormHeader titleH2="TICSP/ICSP/CSP Strategic Outcomes" titleSaveDate="yesterday">Define activities within this CSP</FormHeader>
                <hr/>
            </form>
        )
      }
}    

export default ContentCSP;